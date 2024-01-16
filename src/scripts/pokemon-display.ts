import { Pokemon } from '../types/PokemonTypes.ts'

// funcion para mostrar los pokemons en el html
export function displayPokemon (pokemons: Pokemon, listPokemon: HTMLDivElement) {
  console.log(pokemons)
  // de cada pokemon, traer sus tipos, y mostrarlos en el html como etiqueta span
  let types = ''
  types = pokemons.types.map(type => `<span class="type ${type.type.name}">${type.type.name}</span>`).join('')

  // para que el id de cada pokemon sea de 3 digitos (001, 022, 333, etc)
  let pokeId = pokemons.id.toString()
  pokeId = pokeId.length === 1 ? '00' + pokeId : pokeId.length === 2 ? '0' + pokeId : pokeId

  const div = document.createElement('div')
  div.innerHTML = `
    <div class="poke-container">
      <p class="poke-id">#${pokeId}</p>
      <div class="poke-img">
        <img src="${pokemons.other.dream_world.front_default}" alt="${pokemons.name}" loading="lazy">
      </div>
      <div class="poke-info">
        <div class="name-container">
          <h2 class="poke-name">${pokemons.name}</h2>
        </div>
        <div class="types-container">
          ${types}
        </div>
        <div class="poke-stats">
          <span class="stat">HP: ${pokemons.stats[0].base_stat}</span>
          <span class="stat">ATK: ${pokemons.stats[1].base_stat}</span>
          <span class="stat">DEF: ${pokemons.stats[2].base_stat}</span>
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
