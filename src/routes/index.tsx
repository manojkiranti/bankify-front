import { useRoutes } from 'react-router-dom';
import { Navigate} from 'react-router-dom';
import { authRoutes } from './auth';
// import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { useAppSelector } from '@/hooks/hooks';
export const AppRoutes = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth)
  /**
   * TODO: Filter procted routes and public routes remaining.
   * TODO: create a hook to verify authenticated user
   */

  if (!isAuthenticated) {
    return useRoutes([
      {
        path: '/', 
        element: <Navigate to="/auth" /> // Redirect to auth page (default login page)
      },
      ...authRoutes ]);
  }
  return useRoutes([
    ...protectedRoutes,
    {
      path: '*', // Catch-all route for invalid paths
      element: <Navigate to="/dashboard" />, // Redirect to the dashboard by default
    }
  ]);
};
