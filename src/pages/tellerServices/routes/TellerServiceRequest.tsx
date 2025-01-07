import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import CashDeposit from './CashDeposit';
import ChequeDeposit from './ChequeDeposit';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Cash Deposit',
    children: <CashDeposit />,
  },
  {
    key: '2',
    label: 'Cheque Deposit',
    children: <ChequeDeposit />,
  }
];

const TellerServiceRequest: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default TellerServiceRequest;