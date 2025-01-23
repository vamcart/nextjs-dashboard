import { Metadata } from 'next';
import Counter from '@/app/ui/counter/counter';

export const metadata: Metadata = {
  title: 'Counter',
};

export default async function Page() {

  return (
    <main>
      <h1>Counter</h1>
      <Counter />
    </main>
  );
}