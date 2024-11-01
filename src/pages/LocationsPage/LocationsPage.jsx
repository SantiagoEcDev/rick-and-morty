import React, { useEffect, useState } from 'react';
import LocationCard from '../../components/LocationCard/LocationCard'; 
import { fetchLocations } from '../../api/api';
import './LocationsPage.css';

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [locationsPerPage] = useState(6); // Número de ubicaciones por página

  useEffect(() => {
    const getLocations = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    getLocations();
  }, []);

  const indexOfLastLocation = currentPage * locationsPerPage;
  const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
  const currentLocations = locations.slice(indexOfFirstLocation, indexOfLastLocation);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className="locations-page">
      <h1 className="page-title">Rick and Morty Locations</h1>
      <div className="card-container">
        {currentLocations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(locations.length / locationsPerPage) }, (_, i) => (
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

export default LocationsPage;
