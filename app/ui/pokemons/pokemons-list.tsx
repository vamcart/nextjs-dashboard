import { Pokemon } from '@/app/lib/definitions';
import { PokemonItem } from '@/app/ui/pokemons/pokemon';
import { fetchPokemons } from '@/app/lib/data';

export async function PokemonsList() {
  const pokemons: Pokemon[] = await fetchPokemons();

  return (
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {pokemons?.map((pokemon) => (
                <tr
                  key={pokemon.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                    <PokemonItem pokemon={pokemon} />
                </tr>
              ))}
            </tbody>
          </table>    
  );
}