import React from "react";
import{Link} from'react-router-dom';


export default function LandingPage(){
    return(
        <div className="land-link">
            <h1 className="land-link">
                ¡Hola Dogs!
            </h1>
            <Link to = '/home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}