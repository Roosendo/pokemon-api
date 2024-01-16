export interface Pokemon {
  id: number
  name: string
  types: Array<{ type: { name: string } }>
  other: { dream_world: { front_default: string } }
  stats: Array<{ base_stat: number }>
}
