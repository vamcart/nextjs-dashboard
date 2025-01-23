'use client';
import Image from 'next/image';
import { useGetPokemonByNameQuery } from '@/app/services/pokemon'

export default function PokemonInfo() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
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
              <Image
                src={data.sprites.front_shiny}
                className="mr-2 rounded-full"
                width={28}
                height={28}
                alt={`${data.species.name}'s profile picture`}
              />          
        </>
      ) : null}
    </div>
  )
}