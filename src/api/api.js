// api.js
export const fetchCharacter = async (id) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (!response.ok) {
    throw new Error("Error fetching character data");
  }
  return await response.json();
};

export const fetchCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  if (!response.ok) {
    throw new Error("Error fetching characters data");
  }
  const data = await response.json();
  return data.results;
};

export const fetchEpisodes = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/episode");
  if (!response.ok) {
    throw new Error("Error fetching episodes data");
  }
  const data = await response.json();
  return data.results;
};
export const fetchLocations = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/location");
  if (!response.ok) {
    throw new Error("Failed to fetch locations");
  }
  const data = await response.json();
  return data.results; 
};
