import Link from 'next/link';

import { MainLayout } from '../src/components/UI/layout';

export default function Home() {
  return (
    <MainLayout>
      <h1>About page</h1>

      <h1 claclassName="title">
        Ir a{' '}
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </h1>
    </MainLayout>
  );
}
