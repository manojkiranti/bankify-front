import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import NewMobankRegistration from './NewMobankRegistration';
import MobankResetPin from './MobankResetPin';
import MobankBlock from './MobankBlock';
import MobankUnblock from './MobankUnblock';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'New Register',
    children: <NewMobankRegistration />,
  },
  {
    key: '2',
    label: 'Pin Reset',
    children: <MobankResetPin />,
  },
  {
    key: '3',
    label: 'Block',
    children: <MobankBlock />,
  },
  {
    key: '4',
    label: 'Un Block',
    children: <MobankUnblock />,
  },
];

const MobankRequest: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default MobankRequest;