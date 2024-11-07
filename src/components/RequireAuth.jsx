import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import Loading from 'components/shared/Loading';

export const RequireAuth = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loading/>;

  //if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return <Outlet />;
};
