import React, { useEffect, useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { fetchCharacters } from '../../api/api';
import './CharactersPage.css';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(4); // Número de personajes por página

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };
    getCharacters();
  }, []);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="characters-page">
      <h1 className="page-title">Rick and Morty Characters</h1>
      <div className="card-container">
        {currentCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(characters.length / charactersPerPage) }, (_, i) => (
          <button
            key={i + 1}
            className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </main>
  );
};

export default CharactersPage;
