type Pokemon = {
  name: string
  url: string
}

type PokemonListProps = {
  list: Pokemon[]
}

export default function PokemonList({ list }: PokemonListProps) {
  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  )
}
