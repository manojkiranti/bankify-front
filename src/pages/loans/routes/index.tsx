import { Navigate, Route, Routes } from 'react-router-dom';
import PersonalLoan from './PersonalLoan';


export const LoanRoutes = () => {
    return (
      <Routes>
        <Route path=":loantype" element={<PersonalLoan />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    );
  };