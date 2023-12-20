// funcion para filtrar los pokemons por nombre
function filterByName (pokemons, searchText) {
  return searchText ? pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchText.toLowerCase())) : pokemons
}

// funcion para filtrar los pokemons por tipo
function filterByType (pokemons, selectedType) {
  return selectedType ? pokemons.filter(pokemon => pokemon.types.some(type => type.type.name === selectedType)) : pokemons
}

// funcion para aplicar los filtros
export function applyFilter (pokemons, listPokemon, displayPokemon, searchText, selectedType, dinamicText) {
  // filtrar los pokemons por nombre y tipo
  const filteredPokemons = filterByType(filterByName(pokemons, searchText), selectedType)
  // aqui limpio el html
  listPokemon.innerHTML = ''
  // y muestro los pokemons filtrados
  filteredPokemons.map(pokemon => displayPokemon(pokemon, listPokemon))
  // mostrar el numero de pokemons que se estan mostrando
  dinamicText.textContent = filteredPokemons.length > 1
    ? `Showing ${filteredPokemons.length} pokemons`
    : filteredPokemons.length === 1
      ? 'Showing 1 pokemon'
      : 'No pokemons found'
}

/*
  - esta funcion es para filtrar los pokemons
  - es lo mas complejo de todo el proyecto
  - el filterByName es para filtrar los pokemons por nombre
  - el filterByType es para filtrar los pokemons por tipo
  - no se usa 'export ' porque solo se utilizan aqui
  - pero en applyFilter si se usa 'export ' porque se utiliza en main.js
  - la constante filteredPokemons es para filtrar los pokemons por nombre y tipo
    una funcion dentro de otra funcion, es para reducir codigo
  luego en listPokemon.innerHTML = '' es para limpiar el html
  - y en filteredPokemons es para mostrar los pokemons filtrados
  - el dinamicText es para mostrar el numero de pokemons que se estan mostrando
*/
