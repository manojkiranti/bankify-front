import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import FixedDeposit from './FixedDeposit';
import DisputeClaim from './DisputeClaim';
import BlockAccount from './BlockAccount';
import ChequeRequest from './ChequeRequest';
import ChequeStopRequest from './ChequeStopRequest';
import BalanceCertificate from './BalanceCertificate';
import LockerRequest from './LockerRequest';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Fixed Deposit',
    children: <FixedDeposit />,
  },
  {
    key: '2',
    label: 'Dispute Claim',
    children: <DisputeClaim />,
  },
  {
    key: '3',
    label: 'Block Account',
    children: <BlockAccount />,
  },
  {
    key: '4',
    label: 'Cheque Request',
    children: <ChequeRequest />,
  },
  {
    key: '5',
    label: 'Cheque Stop Request',
    children: <ChequeStopRequest />,
  },
  {
    key: '6',
    label: 'Balance Certificate',
    children: <BalanceCertificate />,
  },
  {
    key: '7',
    label: 'Locker Request',
    children: <LockerRequest />,
  },
];

const CustomerServiceRequest: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default CustomerServiceRequest;