import React from "react";

export default function Card({name,image,temperamento,peso,añosdevida}){
return(

    <div>
        <h3>{name}</h3>
 <h5>temperamento</h5>
 <img src={image} alt="img not found" width="200px" height="250px"/>
    </div>
)
}

// export default function Card(props){
//     return (
//         <div>
//             <button onClick={props.onClose}>X</button>
//             <h2>{props.name}</h2>
//             <h3>Temperaments:{props.temperaments}</h3>
//             <h4>Peso:{props.peso}</h4>
//             <h5>AñosDeVida:{props.añosdevida}</h5>
//         <img src={props.image} alt={props.name}/>
//         </div>
//     )
// }