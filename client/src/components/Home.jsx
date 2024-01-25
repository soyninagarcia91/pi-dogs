import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCharactersByStatus, filterCreated, getCharacter } from '../redux/actions';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';


export default function Home() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.character); // Cambié 'dog' a 'character'
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(8);
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = allCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCharacter());
  }, [dispatch]);

  return (
    <div>
      <Link to="/dog">Crear personaje</Link>
      <h1>The Cutest Dogs</h1>

      <button onClick={() => dispatch(getCharacter())}>
        Volver a cargar todos los personajes
      </button>

      {/* Filters */}
      <select>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>

      <select onChange={(e) => dispatch(filterCharactersByStatus(e.target.value))}>
        <option value="Temperaments">Temperamentos</option>
        <option value="Well">Bueno</option>
        <option value="Badboy">Malo</option>
        <option value="Love">Necesita mucho cariño</option>
      </select>

      <select onChange={(e) => dispatch(filterCreated(e.target.value))}>
        <option value="All">Todos</option>
        <option value="created">Creados</option>
        <option value="api">Existente</option>
      </select>

      <Paginado
        charactersPerPage={charactersPerPage}
        allCharacters={allCharacters.length}
        paginado={paginado}
      />

      <SearchBar />

      <div className='cartas'>
        {currentCharacters.map((el) => (
          <Link to={`/home/${el.id}`} key={el.id}>
            <Card name={el.name} image={el.img} temperamento={el.temperamento} />
          </Link>
        ))}
      </div>
    </div>
  );
}


