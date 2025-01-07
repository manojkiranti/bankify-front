import { Navigate, Route, Routes } from 'react-router-dom';
import LoanRequest from './LoanRequest';


export const LoanRoutes = () => {
    return (
      <Routes>
        <Route path="" element={<LoanRequest />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    );
  };