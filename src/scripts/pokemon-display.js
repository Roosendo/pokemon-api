// funcion para mostrar los pokemons en el html
export function displayPokemon (poke, listPokemon) {
  // de cada pokemon, traer sus tipos, y mostrarlos en el html como etiqueta span
  let types = poke.types.map(type => `<span class="type ${type.type.name}">${type.type.name}</span>`)
  types = types.join('')

  // para que el id de cada pokemon sea de 3 digitos (001, 022, 333, etc)
  let pokeId = poke.id.toString()
  pokeId = pokeId.length === 1 ? '00' + pokeId : pokeId.length === 2 ? '0' + pokeId : pokeId

  const div = document.createElement('div')
  div.innerHTML = `
    <div class="poke-container">
      <p class="poke-id">#${pokeId}</p>
      <div class="poke-img">
        <img src="${poke.sprites.other['official-artwork'].front_default}" alt="${poke.name}" loading="lazy">
      </div>
      <div class="poke-info">
        <div class="name-container">
          <h2 class="poke-name">${poke.name}</h2>
        </div>
        <div class="types-container">
          ${types}
        </div>
        <div class="poke-stats">
          <span class="stat">HP: ${poke.stats[0].base_stat}</span>
          <span class="stat">ATK: ${poke.stats[1].base_stat}</span>
          <span class="stat">DEF: ${poke.stats[2].base_stat}</span>
        </div>
      </div>
    </div>
  `
  listPokemon.append(div)
}

/*
  - esta funcion es para mostrar los pokemons en el html
  - el map (linea 3) es para que de cada pokemon, traer sus tipos, y mostrarlos en el html como etiqueta span
  - la operacion ternaria (linea 9) es para que el id de cada pokemon sea de 3 digitos (001, 022, 333, etc)
  - aqui solo se muestran los pokemons que se le pasen a la variable listPokemon
    ya sean todos los pokemons, o solo algunos
*/
