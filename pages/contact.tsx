import Link from 'next/link';

import { MainLayout } from '../src/components/UI/layout';

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact page</h1>

      <h1 className="title">
        Ir a{' '}
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </h1>
    </MainLayout>
  );
}
