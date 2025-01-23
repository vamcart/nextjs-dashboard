'use client';
import { useGetPokemonByNameQuery } from '@/app/services/pokemon'

export default function PokemonInfo() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading, isFetching, isSuccess, isError } = useGetPokemonByNameQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="Pokemons">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}