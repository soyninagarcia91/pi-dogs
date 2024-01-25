const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios');
const e = require('express');
const temperaments = require('../models/temperaments');
const {Character,Temperaments} =require ('../db');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo=async(req,res)=>{
//   res.header('Access-Control-Allow-Origin', 'https://api.thedogapi.com/v1/breeds'); 
const apiUrl='https://api.thedogapi.com/v1/breeds'
const apiData= await axios (apiUrl)
const apiInfo = await apiData.data.map( el =>{
    return{
        name : el.name,
        img: el.img,
        altura: el.altura,
        peso:el.peso,
        añosdevida:el.añosdevida,
         temperamento: el.temperamento//.map(el=>el),//map devuelve todos los temperamentos
    };
});
return apiInfo;
};

//trae informacion de la base de datos
const getDbInfo = async () => { // declara una funcion asincrona
    return await Character.findAll({ //La función utiliza Sequelize, una popular biblioteca Node.js ORM (Object-Relational Mapping), para consultar la base de datos. Llama al método 'findAll' en el modelo 'Character' (suponiendo que 'Character' es un modelo Sequelize que representa una tabla de la base de datos
        include: { //Esta es una opción en Sequelize que especifica las asociaciones que se incluirán en el resultado. Le permite recuperar datos relacionados de otras tablas.
            mode1: temperaments, // traer todos los temperamentos
            attributes: ['name'], // traer todos los personajes e incluir los temperamentos y el nombre
            through: { //Esta parte especifica la tabla de unión de la asociación. La opción "through" se utiliza cuando se tiene una asociación de varios a varios y permite personalizar los atributos que se deben recuperar de la tabla de combinación. En este caso, se establece en una matriz vacía, lo que indica que no se debe recuperar ningún atributo adicional de la tabla de combinación.
                attributes: [],
            },
        },
    });
};
//La función envuelve todo en un 'return await' para asegurarse de que la función devuelve una promesa que se resuelve en el resultado de la operación 'findAll'.


const getAllCharacters =async()=>{
    const apiInfo= await getApiInfo();
    const dbInfo = await getDbInfo(); 
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
};

router.get('/characters',async (req,res)=>{
    //la ruta por query se usa para buscar por nombre
    const name =req.query.name
    let charactersTotal= await getAllCharacters();
    if (name){
        let characterName=await charactersTotal.filter( el => el.name.toLowerCase().includes(name.toLowerCase))//compara los valores en mayuscula y minuscula
    characterName.length? //pregunta si encontro algo
    res.status(200).send(characterName):
    res.status(404).send('No esta el personaje,Sorry');
    }else{
        res.status(200).send(charactersTotal)
    }
})
 router.get('/temperaments', async(req,res)=> {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
const temperamento =temperamentoApi.data.map(el=>el.temperamento)
const tempEach =temperamento.map(async el=>{
    for(let i=0; i< el.length;i++) returnel(i)
tempEach.forEach(el=>{
    temperamento.findOrCreate({ //crea en temperamentos donde el nombre sea el elemnto q estoy mapeando
        where:{name:el}
    })
})
const allTemperamento = await temperamento.findAll();
res.send(allTemperamento)
})
 })
router.post('/dog',async(req,res)=>{
let {
    name,
    img,
    altura,
     peso,
    añosdevida,
   temperamento
}=req.body
let dogCreated= await Dog.create({
    name,
    img,
    altura,
     peso,
    añosdevida,
   temperamento,
   createdInDb
})
let temperamentoDb = await temperamento.findAll({ // encontrar todo el temperamento q llega por body
    where:{name:temperamento}
})
dogCreated.addTemperamento(temperamentoDb)
res.send('Personaje creado con exito')
});
 
router.get('/temperaments/:id',async(req,res)=>{
    const id=req.params.id;
    const dogTotal= await getAllDog()
    if(id){
        let dogId=await dogTotal.filter(el=>el.id==id)
        dogId.length?
        res.status(200).json(dogId):
        res.status(404).send('No encontré ese personaje')
    }
})
module.exports = router;
