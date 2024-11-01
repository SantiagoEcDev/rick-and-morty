import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import LocationsPage from "./pages/LocationsPage/LocationsPage";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";

const App = () => {
  

  return (
    <Router>
      <Navbar />
      <div className="main__container">
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          <Route path="/chapters" element={<EpisodesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
