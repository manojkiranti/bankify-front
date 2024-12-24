import { Navigate, Route, Routes } from 'react-router-dom';
import BankGuranteeVerification from './BankGuranteeVerification';


export const DocumentVerificationRoutes = () => {
    return (
      <Routes>
        <Route path="bank-guarantee" element={<BankGuranteeVerification />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    );
  };