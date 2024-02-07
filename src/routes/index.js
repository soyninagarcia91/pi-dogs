const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios =require('axios')
const {Temperaments,Dog}=require('../db')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo=async()=>{

    const apiUrl=await axios.get('https://api.thedogapi.com/v1/breeds')
    const apiInfo=await apiUrl.data.map(el=>{
        return {
            name:el.name,
            img:el.img,
            temperamento:el.temperamento,
            peso:el.peso,
            altura:el.altura,  
            años:el.años,
            appearance:el.appearance.map(el=>el), //devuelve todos los temperamentos
        }
    });
    return apiInfo;

}
//trae informacion de la base de datos
const getDbInfo=async()=>{
    return await Dog.findAll({
        include:{
            model:Temperaments,
            attributos:['name'],
            through:{
                attributes:[],
            },
        }
    })
}
const getAllDog=async()=>{
  const apiInfo=await getApiInfo();
  const dbInfo=await getDbInfo();
  const infoTotal=apiInfo.concat(dbInfo);
  return infoTotal
}
router.get('/temperaments',async(req,res)=>{
const name=req.query.name
let dogTotal=await getAllDog();
if (name){
    let dogName=await dogTotal.filter(el=>el.name.toLowerCase().includes(name.toLowerCase())) // pasa a mayusculas y minusculas
dogName.length?
res.status(200).send(dogName):
res.status(404).send('No esta el personaje,Sorry');
}else{
    res.status(200).send(dogTotal)
}
})

router.get('/temperaments',async(req,res)=>{
const temperamentsApi=await axios.get('https://api.thedogapi.com/v1/breeds')
const temperaments=temperamentsApi.data.map(el=>el.temperaments)
const temEach=temperaments.map(el=>{
    for(let i=0; i<el.length;i++)return el[i]})
    temEach.forEach(el=>{
temperaments.findOrCreate({
    where:{name:el}
})
    })
const allTemperaments=await temperaments.findAll();
res.send(allTemperaments)
})

router.post('/dog',async(req,res)=>{
let{
    name,
    peso,
    altura,
    años,
    createdInDb,
    temperamento,
}=req.body
let dogCreated=await Dog.create({
    name,
    peso,
    altura,
    años,
    createdInDb,
})
let temperamentsDb=await Temperaments.findAll({
    where:{name:temperaments}
})
temperamentsCreated.addTemperaments(temperamentsDb)
res.send('Personaje creado con exito')
})
router.get('/dog/:id', async(req,res)=>{
    const id = req.params.id;
    const dogTotal= await getAllDog()
    if (id){
        let dogId=await dogTotal.filter(el=>el.id==id)
        dogId.length?
        res.status(200).json(dogId):
        res.status(404).send('No encontré ese personaje')
    }
})
module.exports = router;
