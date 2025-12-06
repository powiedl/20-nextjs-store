import React, { Suspense } from 'react';
import CheckoutClient from '@/components/checkout/CheckoutClient';

const CheckoutPage = () => {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutClient />
    </Suspense>
  );
};

export default CheckoutPage;
