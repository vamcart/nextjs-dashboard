import { Metadata } from 'next';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { PokemonsList } from '@/app/ui/pokemons/pokemons-list';
 
export const metadata: Metadata = {
  title: 'Pokemons',
};
export default function Pokemons() {
  return (
    <>
    <h2>Pokemons Page</h2>
    <div className="space-y-8 lg:space-y-14">
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <PokemonsList />
      </Suspense>
    </div>
    </>
  );
}
