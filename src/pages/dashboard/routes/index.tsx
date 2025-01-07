import { Navigate, Route, Routes } from 'react-router-dom';
import Dashbaord from './Dashboard';
import ContainerWrapper from '@/pages/layout/ContainerWrapper';

export const DashboardRoutes = () => {
  return (
    <ContainerWrapper>
      <Routes>
        <Route path="" element={<Dashbaord />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    </ContainerWrapper>
  );
};
