import { Navigate, Route, Routes } from 'react-router-dom';
import NewDebitCard from './NewDebitCard';
import NewCreditCard from './NewCreditCard';
import RepinDebitCard from './RepinDebitCard';
import CardBlock from './DebitCardBlock';
import DebitCardUnBlock from './DebitCardUnblock';
import CardRequest from './CardRequest';
export const CardRoutes = () => {
  return (
    <Routes>
       <Route path="" element={<CardRequest />} />
      <Route path="new-debit-card" element={<NewDebitCard />} />
      <Route path="new-credit-card" element={<NewCreditCard />} />
      <Route path="repin-request" element={<RepinDebitCard />} />
      <Route path="debit-card-block" element={<CardBlock />} />
      <Route path="debit-card-unblock" element={<DebitCardUnBlock />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
