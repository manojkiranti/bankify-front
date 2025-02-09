import { Container } from "@/components/Elements";
import { faBadgeCheck, faCheck, faCheckDouble, faClipboardList, faPenToSquare } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

import RequestAreaChart from "../components/RequestAreaChart";
const Dashboard = () => {
  return (
    <>
    
      <Container fullWidth={true}>
        <Row>
          <Col xs={24}>
            <Typography.Title level={3}>Dashbaord</Typography.Title>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col xs={24} md={6}>
            <Card>
                <div className="card-icon-wrap icon-bg-primary">
                  <div className="card-icon">
                    <FontAwesomeIcon icon={faClipboardList} />
                  </div>                   
                </div>
                <div className="card-count">
                  <Paragraph style={{marginBottom:0}}>Total Request</Paragraph>
                  <Typography.Title level={4} style={{margin:0}}>23,400</Typography.Title>
                </div>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card>
                <div className="card-icon-wrap icon-bg-secondary">
                  <div className="card-icon">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>                   
                </div>
                <div className="card-count">
                  <Paragraph style={{marginBottom:0}}>Total Initiated</Paragraph>
                  <Typography.Title level={4} style={{margin:0}}>5,000</Typography.Title>
                </div>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card>
                <div className="card-icon-wrap icon-bg-success">
                  <div className="card-icon">
                    <FontAwesomeIcon icon={faBadgeCheck} />
                  </div>                   
                </div>
                <div className="card-count">
                  <Paragraph style={{marginBottom:0}}>Total Submitted</Paragraph>
                  <Typography.Title level={4} style={{margin:0}}>10,000</Typography.Title>
                </div>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card>
                <div className="card-icon-wrap icon-bg-orange">
                  <div className="card-icon">
                    <FontAwesomeIcon icon={faCheckDouble} />
                  </div>                   
                </div>
                <div className="card-count">
                  <Paragraph style={{marginBottom:0}}>Total Completed</Paragraph>
                  <Typography.Title level={4} style={{margin:0}}>5,000</Typography.Title>
                </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={24} md={18}>
            {/* <RequestAreaChart /> */}
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Dashboard;