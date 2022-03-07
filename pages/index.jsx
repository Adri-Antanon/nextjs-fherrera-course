import Link from 'next/link';

import { MainLayout } from '../src/components/UI/layout';

export default function Home() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <h1 className="title">
        Ir a{' '}
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </h1>
    </MainLayout>
  );
}
