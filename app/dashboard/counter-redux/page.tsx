import { Metadata } from 'next';
import StoreProvider from '@/app/store-provider';
import { CounterRedux } from '@/app/ui/counter/counter-redux';

export const metadata: Metadata = {
  title: 'Counter Redux',
};

export default async function Page() {

  return (
    <StoreProvider>
    <main>
      <h1>Counter Redux</h1>
      <CounterRedux />
    </main>
    </StoreProvider>
  );
}