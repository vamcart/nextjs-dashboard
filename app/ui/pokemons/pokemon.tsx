import { Pokemon } from '@/app/lib/definitions';
import Image from 'next/image';

export const PokemonItem = ({ pokemon }: { pokemon: Pokemon }) => {

  return (
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{pokemon.name}</p>
                    </div>
                  </td>
  );
};
