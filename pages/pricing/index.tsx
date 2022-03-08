import { ReactElement } from 'react';
import Link from 'next/link';

import { MainLayout } from '../../src/components/UI/layout';
import { DarkLayout } from '../../src/components/UI/layout/DarkLayout';

const PricingPage = () => {
  return (
    <>
      <h1>Pricing page</h1>

      <h1 className="title">
        Ir a{' '}
        <Link href={'/'}>
          <a>Contact</a>
        </Link>
      </h1>
    </>
  );
};

export default PricingPage;

PricingPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
