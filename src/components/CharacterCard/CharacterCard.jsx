// src/components/CharacterCard/CharacterCard.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../features/favorites/favoritesSlice";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(character));
    } else {
      dispatch(addFavorite(character));
    }
  };

  return (
    <article className="character__card">
      <div className="character__card--image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character__card--info">
        <div className="character__card--info--section">
          <div className="character__card--info--section--title">
            <Link to={`/character/${character.id}`}>
              <h2>{character.name}</h2>
            </Link>
            <button className="favorite--button" onClick={handleFavorite}>
              {isFavorite ? <GoHeartFill className="favorite" /> : <GoHeartFill />}
            </button>
          </div>

          <span className="status">
            <span className={`status__icon ${character.status === 'Alive' ? 'alive' : character.status === 'Dead' ? 'dead' : 'unknown'}`}></span>
            {character.status}
          </span>
        </div>

        <div className="character__card--info--section">
          <span className="span--title">Last known location:</span>
          <a href="">{character.location.name}</a>
        </div>
        <div className="character__card--info--section">
          <span className="span--title">First seen in:</span>
          <a href="">{character.origin.name}</a>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;
