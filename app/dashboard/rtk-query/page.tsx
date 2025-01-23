import StoreProvider from '@/app/store-provider';
import PokemonInfo from '@/app/ui/pokemons/pokemon-info';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RTK Query',
};

export default async function Page() {

  return (
    <StoreProvider>
    <main>
      <h1>RTK Query</h1>
      <h2>Pokemon RTK Query:</h2>
      <PokemonInfo />
    </main>
    </StoreProvider>
  );
}