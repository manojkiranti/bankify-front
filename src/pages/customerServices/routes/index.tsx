import { Navigate, Route, Routes } from 'react-router-dom';
import FixedDeposit from './FixedDeposit';
import DisputeClaim from './DisputeClaim';


export const CustomerServiceRoutes = () => {
    return (
      <Routes>
        <Route path="fixed-deposit" element={<FixedDeposit />} />
        <Route path="dispute-claim" element={<DisputeClaim />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    );
  };