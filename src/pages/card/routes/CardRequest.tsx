import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import NewDebitCard from './NewDebitCard';
import NewCreditCard from './NewCreditCard';
import RepinDebitCard from './RepinDebitCard';
import DebitCardBlock from './DebitCardBlock';
import DebitCardUnBlock from './DebitCardUnblock';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'New Debit Card',
    children: <NewDebitCard />,
  },
  {
    key: '2',
    label: 'New Credit Card',
    children: <NewCreditCard />,
  },
  {
    key: '3',
    label: 'Debit Card Repin',
    children: <RepinDebitCard />,
  },
  {
    key: '4',
    label: 'Debit Card Block',
    children: <DebitCardBlock />,
  },
  {
    key: '5',
    label: 'Debit Card Un Block',
    children: <DebitCardUnBlock />,
  },
];

const CardRequest: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default CardRequest;