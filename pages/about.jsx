import Link from 'next/link';

import { MainLayout } from '../src/components/UI/layout';
import { DarkLayout } from '../src/components/UI/layout/DarkLayout';

export default function AboutPage() {
  return (
    <>
      <h1>About page</h1>

      <h1 className="title">
        Ir a{' '}
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </h1>
    </>
  );
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
