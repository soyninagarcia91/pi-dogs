import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postCharacter, getTemperaments } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function CharacterCreate() {
    const dispatch = useDispatch();
    const temperaments = useSelector((state) => state.temperaments);

    const [input, setInput] = useState({
        name: "",
        peso: "",
        altura: "",
        años: "",
        temperamento: [],
    });

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);

    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Crea tu personaje!</h1>
            <form>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Peso</label>
                    <input
                        type="text"
                        value={input.peso}
                        name="peso"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Altura</label>
                    <input
                        type="text"
                        value={input.altura}
                        name="altura"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Años</label>
                    <input
                        type="text"
                        value={input.años}
                        name="años"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Temperamento</label>
                    <input
                        type="text"
                        value={input.temperamento}
                        name="temperamento"
                        onChange={handleInputChange}
                    />
                </div>
                <select
    value={input.temperamento}
    name="temperamento"
    onChange={handleInputChange} // Asegúrate de tener una función llamada handleInputChange que maneje los cambios en el input
>
    {temperaments.map((temp) => (
        <option key={temp.name} value={temp.name}>
            {temp.name}
        </option>
    ))}
</select>

            </form>
        </div>
    );
}
