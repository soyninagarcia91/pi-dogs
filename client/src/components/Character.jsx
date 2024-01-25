import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {postCharacter,getTemperaments} from '../redux/actions/index';
import { useDispatch,useSelector } from 'react-redux';

export default function Character(){
    const dispatch=useDispatch()
    const Temperaments=useSelector((state)=>state.temperaments)

    const[input,setInput]=useState({
        name:"",
        peso:"",
        altura:"",
        añosDeVida:""
    })
    //cada vez que se  ejecuta la funcion handlechange, además de lo que tiene agrgale el target.value de lo que este modificando 
function handleInputChange(e){
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
    
}
    useEffect(()=>{
        dispatch(getTemperaments())
    },[]);

    return(
        <div>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Creá tu dogs!</h1>
            <form>
                <div>
                    <label>Nombre:</label>
                    <input
                    type="text"
                    value={input.name}
                    name="name"
                    />
                </div>
                <div>
                    <label>Temperaments:</label>
                    <input
                    type="text"
                    value={input.temperaments}
                    name="temperaments"
                    />
                </div>
                <div>
                    <label>AñosDeVida:</label>
                    <input
                    type="text"
                    value={input.añosDeVida}
                    name="AñosDeVida"
                    />
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                    type="text"
                    value={input.image}
                    name="image"
                    />
                </div>
                <div>
                    <label>Peso:</label>
                    <input
                    type="text"
                    value={input.peso}
                    name="Peso"
                    />
                </div>
                <select>
                {temperaments.map((temp)=>(
                <option value={temp.name}>{temp.name}</option>
                ))}
            </select>
            <button type='submit'>Crear perrito</button>
            </form>
           
        </div>
    )
        }