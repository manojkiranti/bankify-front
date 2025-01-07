import { Navigate, Route, Routes } from 'react-router-dom';
import FixedDeposit from './FixedDeposit';
import DisputeClaim from './DisputeClaim';
import BlockAccount from './BlockAccount';
import ChequeRequest from './ChequeRequest';
import ChequeStopRequest from './ChequeStopRequest';
import BalanceCertificate from './BalanceCertificate';
import LockerRequest from './LockerRequest';
import CustomerServiceRequest from './CustomerServiceRequest';


export const CustomerServiceRoutes = () => {
    return (
      <Routes>
         <Route path="" element={<CustomerServiceRequest />} />
        <Route path="fixed-deposit" element={<FixedDeposit />} />
        <Route path="dispute-claim" element={<DisputeClaim />} />
        <Route path="account-freeze" element={<BlockAccount />} />
        <Route path="cheque-request" element={<ChequeRequest />} />
        <Route path="cheque-stop" element={<ChequeStopRequest />} />
        <Route path="balance-certificate-request" element={<BalanceCertificate />} />
        <Route path="locker-request" element={<LockerRequest />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    );
  };