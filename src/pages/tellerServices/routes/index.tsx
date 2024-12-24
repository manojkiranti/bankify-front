import { Navigate, Route, Routes } from 'react-router-dom';
import CashDeposit from './CashDeposit';
import ChequeDeposit from './ChequeDeposit';


export const TellerRoutes = () => {
    return (
      <Routes>
        <Route path="cash-deposit" element={<CashDeposit />} />
        <Route path="cheque-deposit" element={<ChequeDeposit />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    );
  };