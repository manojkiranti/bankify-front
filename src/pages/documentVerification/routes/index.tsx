import { Navigate, Route, Routes } from 'react-router-dom';
import BankGuranteeVerification from './BankGuranteeVerification';
import DocumentVerificationRequest from './DocumentVerificationRequest';


export const DocumentVerificationRoutes = () => {
    return (
      <Routes>
        <Route path="" element={<DocumentVerificationRequest />} />
        <Route path="bank-guarantee" element={<BankGuranteeVerification />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    );
  };