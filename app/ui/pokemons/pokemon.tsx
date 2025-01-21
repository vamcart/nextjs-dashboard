import { Pokemon } from '@/app/lib/definitions';
import Image from 'next/image';

export const PokemonItem = ({ pokemon }: { pokemon: Pokemon }) => {

  return (
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={`/products/${pokemon.image}`}
                        className="rounded-full"
                        width={150}
                        height={150}
                        alt={`${pokemon.name}`}
                      />
                      <p>{pokemon.name}</p>
                    </div>
                  </td>
  );
};
