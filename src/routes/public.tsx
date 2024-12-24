/**
 * * code splitting
 *  This approach reduces the initial load time by loading the component only when it's needed.
 */
import { Spinner } from '@/components/Elements';
import { PublicLayout } from '@/components/Layout';
import ThankYou from '@/pages/onboarding/routes/ThankYou';
import { lazyImport } from '@/utils/lazyImport';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Dynamically imports the `OnboardingRoutes` component using the `lazyImport` function.
 *
 * This approach helps to:
 * - Improve application performance by reducing the initial bundle size.
 * - Load the `OnboardingRoutes` component only when it is actually needed,
 *   thereby enabling code splitting.
 */
const { HomeRoutes } = lazyImport(
  () => import('@/pages/home'),
  'HomeRoutes',
);

const { CardRoutes } = lazyImport(
  () => import('@/pages/card'),
  'CardRoutes',
);

const {MobankRoutes} = lazyImport(
  () => import('@/pages/mobileBanking'),
  'MobankRoutes',
);

const {CustomerServiceRoutes} = lazyImport(
  () => import('@/pages/customerServices'),
  'CustomerServiceRoutes',
);
const {TellerRoutes} = lazyImport(
  () => import('@/pages/tellerServices'),
  'TellerRoutes',
);

const {DocumentVerificationRoutes} = lazyImport(
  () => import('@/pages/documentVerification'),
  'DocumentVerificationRoutes',
);

const App = () => {
  return (
    <PublicLayout>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </PublicLayout>
  );
};
export const publicRoutes = [
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomeRoutes />,
      },
      {
        path: 'card/*',
        element: <CardRoutes />,
      },
      {
        path: 'mobank/*',
        element: <MobankRoutes />,
      },
      {
        path: 'customer-service/*',
        element: <CustomerServiceRoutes />,
      },
      {
        path: 'teller-service/*',
        element: <TellerRoutes />,
      },
      {
        path: 'document-verification/*',
        element: <DocumentVerificationRoutes />,
      },
      {
        path: 'thank-you',
        element: <ThankYou />,
      },
    ],
  },
];
