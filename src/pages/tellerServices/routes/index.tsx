import { Navigate, Route, Routes } from 'react-router-dom';
import CashDeposit from './CashDeposit';
import ChequeDeposit from './ChequeDeposit';
import TellerServiceRequest from './TellerServiceRequest';


export const TellerRoutes = () => {
    return (
      <Routes>
        <Route path="" element={<TellerServiceRequest />} />
        <Route path="cash-deposit" element={<CashDeposit />} />
        <Route path="cheque-deposit" element={<ChequeDeposit />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    );
  };