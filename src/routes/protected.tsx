import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
/**
 * * code splitting
 *  This approach reduces the initial load time by loading the component only when it's needed.
 */
import { lazyImport } from '@/utils/lazyImport';

import { MainLayout } from '@/components/Layout';
import { Spinner } from '@/components/Elements';

/**
 * todo: should use lazyImport for code splitting
 */
import { ProfilePage } from '@/pages/profile';
import { RequireAuth } from '@/components/Auth/RequireAuth';


const { DashboardRoutes } = lazyImport(
  () => import('@/pages/dashboard'),
  'DashboardRoutes',
);

const { MobankRoutes } = lazyImport(
  () => import('@/pages/mobileBanking'),
  'MobankRoutes',
);

const { CardRoutes } = lazyImport(
  () => import('@/pages/card'),
  'CardRoutes',
);

const { CustomerServiceRoutes } = lazyImport(
  () => import('@/pages/customerServices'),
  'CustomerServiceRoutes',
);

const { TellerRoutes } = lazyImport(
  () => import('@/pages/tellerServices'),
  'TellerRoutes',
);

const { LoanRoutes } = lazyImport(
  () => import('@/pages/loans'),
  'LoanRoutes',
);

const { DocumentVerificationRoutes } = lazyImport(
  () => import('@/pages/documentVerification'),
  'DocumentVerificationRoutes',
);

const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '',
    element: <RequireAuth />,
    children: [
      {
        path: '',
        element: <App />,
        children: [
          { path: 'dashboard/*', element: <DashboardRoutes /> },
          { path: 'mobile-banking/*', element: <MobankRoutes /> },
          { path: 'card/*', element: <CardRoutes /> },
          { path: 'customer-service/*', element: <CustomerServiceRoutes /> },
          { path: 'teller-service/*', element: <TellerRoutes /> },
          { path: 'loans/*', element: <LoanRoutes /> },
          { path: 'document-service/*', element: <DocumentVerificationRoutes /> },
          { path: 'profile', element: <ProfilePage /> },
          { path: '*', element: <Navigate to="." /> },
        ],
      },
    ],
  },
];
