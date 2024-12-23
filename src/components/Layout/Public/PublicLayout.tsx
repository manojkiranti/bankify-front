import { FC, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Flex, Row, AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';
import { Container } from '../../Elements';

import { LOGO } from '@/constant/assets';
import styles from './PublicLayout.module.scss';
import Sidebar from '../Sidebar';
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
const Header = () => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const [value, setValue] = useState('');
  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };
  return (
    <header className={styles.publicHeader}>
      <Container width="sm">
        <Row gutter={30} align="middle">
          <Col xl={11}>
            <div className={styles.logoWrapper}>
              <img src={LOGO} alt="Odin Mortgage" />
            </div>
          </Col>
          <Col xl={13}>
            <Flex justify="flex-end">
              <div style={{width:"100%", position:"relative"}}>
                <AutoComplete
                  options={options}
                  style={{ width: "100%", height:45, paddingLeft:"100px" }}
                  onSelect={onSelect}
                  onSearch={(text) => setOptions(getPanelValue(text))}
                  variant="filled"
                  placeholder="Search"
                  // placeholder="input here"
                >
                  {/* <Input.Search size="large" placeholder="input here" enterButton /> */}
                </AutoComplete>
              </div>
            </Flex>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate('/app/dashboard');
  };
  return (
    <footer className={styles.publicFooter}>
      <Container width="sm">
        <Row gutter={30} align="middle">
          <Col xl={24}>
            <Flex justify="flex-end">
              <Button type="primary" onClick={handleContinue}>
                Continue
              </Button>
            </Flex>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  return <div className="main-layout">
          <div className="main-body">
             <Header />
             {children}
          </div>
          <div className="main-sidebar">
            <Sidebar />
          </div>
    </div>;
};

export default PublicLayout;
