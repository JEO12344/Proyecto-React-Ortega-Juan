import React from 'react';
import SearchBar from '../components/SearchBar';

const Search = () => {
  return (
    <div>
      <h2>Buscar Libros</h2>
      <SearchBar />
      {/* Resultados de la búsqueda aquí */}
    </div>
  );
};

export default Search;