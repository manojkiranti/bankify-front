import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';


import BankGuranteeVerification from './BankGuranteeVerification';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Bank Gurantee Verification',
    children: <BankGuranteeVerification />,
  },
];

const DocumentVerificationRequest: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default DocumentVerificationRequest;