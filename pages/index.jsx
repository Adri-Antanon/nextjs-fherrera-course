import Link from 'next/link';

import { MainLayout } from '../src/components/UI/layout';
import { DarkLayout } from '../src/components/UI/layout/DarkLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <DarkLayout>
        <h1>Home page</h1>
        <h1 className="title">
          Ir a{' '}
          <Link href={'/about'}>
            <a>About</a>
          </Link>
        </h1>
      </DarkLayout>
    </MainLayout>
  );
}
