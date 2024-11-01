import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCharacter } from '../../api/api';
import "./CharacterDetails.css";

const CharacterDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const getCharacter = async () => {
            try {
                const data = await fetchCharacter(id);
                setCharacter(data);
            } catch (error) {
                console.error("Error fetching character details:", error);
            }
        };

        getCharacter();
    }, [id]);

    if (!character) {
        return <div>No character found</div>;
    }

    return (
        <main className="details__main">
            <button className="back-button" onClick={() => navigate(-1)}>&larr; Atrás</button>
            <article className="character__details">
                <img src={character.image} alt={character.name} className="character__image"/>
                <div className="character__details__info">
                    <h1>{character.name}</h1>
                    <p><strong>Status:</strong> {character.status}</p>
                    <p><strong>Species:</strong> {character.species}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Origin:</strong> {character.origin?.name}</p>
                    <p><strong>Last known location:</strong> {character.location?.name}</p>
                </div>
            </article>
        </main>
    );
};

export default CharacterDetails;
