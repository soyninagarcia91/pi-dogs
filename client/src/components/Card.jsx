import React from "react";

export default function Card({ name, image, temperamento, peso, añosdevida, onClose }) {
    if (onClose) {
        // Render the card with close button
        return (
            <div>
                <button onClick={onClose}>X</button>
                <h2>{name}</h2>
                <h3>Temperamento: {temperamento}</h3>
                <h4>Peso: {peso}</h4>
                <h5>Años de Vida: {añosdevida}</h5>
                <img src={image} alt={name} />
            </div>
        );
    } else {
        // Render the card without close button
        return (
            <div>
                <h3>{name}</h3>
                <h5>Temperamento: {temperamento}</h5>
                <img src={image} alt="img not found" width="200px" height="250px" />
            </div>
        );
    }
}
