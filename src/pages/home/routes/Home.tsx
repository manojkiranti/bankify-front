import { Container, ServiceBox } from "@/components/Elements";
import { Col, Flex, Row, Typography } from "antd";

import {
  cardServices,
  
  customerServices,
  documentVerificationServices,
  loanServices,
  mobileBankingServices,
  
  tellerServices,
} from "../constant";
import { ReactNode } from "react";
import Banner from "../components/Banner";

export const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Typography.Title level={3} style={{ marginBottom: "1.5rem" }}>
      {children}
    </Typography.Title>
  );
};
const Home = () => {
  return (
    <>
     <Container width="sm">
            {/* <Row>
              <Col xs={24}>
                 <Banner />
              </Col>
            </Row> */}
            <Row>
              <Col xs={24}>
                <SectionHeading>Card Services</SectionHeading>
              </Col>
            </Row>
            <Flex gap={20} wrap="wrap">
              {cardServices.map((service) => {
                return (
                  <div className="flex-column" key={service.name}>
                    <ServiceBox
                      icon={service.icon}
                      title={service.title}
                      link={service.link}
                    />
                  </div>
                );
              })}
            </Flex>

            <Row>
              <Col xs={24}>
                <SectionHeading>Mobile Banking</SectionHeading>
              </Col>
            </Row>
            <Flex gap={20} wrap="wrap">
              {mobileBankingServices.map((service) => {
                return (
                  <div className="flex-column" key={service.name}>
                    <ServiceBox
                      icon={service.icon}
                      title={service.title}
                      link={service.link}
                    />
                  </div>
                );
              })}
            </Flex>

            <Row>
              <Col xs={24}>
                <SectionHeading>
                  Customer Services
                </SectionHeading>
              </Col>
            </Row>
            <Flex gap={20} wrap="wrap">
              {customerServices.map((service) => {
                return (
                  <div className="flex-column" key={service.name}>
                    <ServiceBox
                      icon={service.icon}
                      title={service.title}
                      link={service.link}
                    />
                  </div>
                );
              })}
            </Flex>

            <Row>
              <Col xs={24}>
                <SectionHeading>
                  Teller Services
                </SectionHeading>
              </Col>
            </Row>
            <Flex gap={20} wrap="wrap">
              {tellerServices.map((service) => {
                return (
                  <div className="flex-column" key={service.name}>
                    <ServiceBox
                      icon={service.icon}
                      title={service.title}
                      link={service.link}
                    />
                  </div>
                );
              })}
            </Flex>

            <Row>
              <Col xs={24}>
                <SectionHeading>
                  Loans
                </SectionHeading>
              </Col>
            </Row>
            <Flex gap={20} wrap="wrap">
              {loanServices.map((service) => {
                return (
                  <div className="flex-column" key={service.name}>
                    <ServiceBox
                      icon={service.icon}
                      title={service.title}
                      link={service.link}
                    />
                  </div>
                );
              })}
            </Flex>
            
            
            <Row>
              <Col xs={24}>
                <SectionHeading>
                  Document Verification
                </SectionHeading>
              </Col>
            </Row>
            <Flex gap={20} wrap="wrap">
              {documentVerificationServices.map((service) => {
                return (
                  <div className="flex-column" key={service.name}>
                    <ServiceBox
                      icon={service.icon}
                      title={service.title}
                      link={service.link}
                    />
                  </div>
                );
              })}
            </Flex>

            
          </Container>
    </>
  );
};

export default Home;
