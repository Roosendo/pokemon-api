const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/'

export async function fetchPokemon (id) {
  try {
    const res = await fetch(API_POKEMON + id)

    if (!res.ok) {
      throw new Error('Error http:' + res.status)
    }

    const data = await res.json()

    const pokemonInfo = {
      id: data.id,
      name: data.name,
      types: data.types,
      other: data.sprites.other,
      stats: data.stats,
    }

    return pokemonInfo
  } catch (err) {
    console.error(err)
    throw err
  }
}

/*
  - esta funcion es para descargar un pokemon
  - igual aqui con async await para que solo se descargue un pokemon a la vez
*/
