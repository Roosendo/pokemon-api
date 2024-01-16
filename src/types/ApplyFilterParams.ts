import { Pokemon } from './PokemonTypes.ts'

export interface ApplyFilterParams {
  pokemons: Pokemon[]
  listPokemon: HTMLDivElement
  displayPokemon: (pokemon: Pokemon, listPokemon: HTMLDivElement) => void
  searchText: string
  selectedType: string
  dinamicText: HTMLParagraphElement
}
