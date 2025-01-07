import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import PersonalLoan from './PersonalLoan';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Home Loan',
    children: <PersonalLoan loanType='home_loan' />,
  },
  {
    key: '2',
    label: 'Gold Loan',
    children: <PersonalLoan loanType='gold_loan'/>,
  },
  {
    key: '3',
    label: 'Loan Against Share',
    children: <PersonalLoan loanType='loan_against_share'/>,
  },
  {
    key: '4',
    label: 'Credit Card Loan',
    children: <PersonalLoan loanType='credit_card_loan'/>,
  }
];

const LoanRequest: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default LoanRequest;