
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import dayjs from 'dayjs';
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/components/Elements";
import { Button, Col, Row, message, Breadcrumb, Card, Dropdown, Space } from "antd";
import {  BalanceCertificateFormType, LockerRequestFormType } from "../types";
import {  balanceCertificateSchema, lockerFormSchema } from "../schema";
import { DatePickerField, InputField, RadioGroupField, SelectField } from "@/components/Form";

import { DownOutlined, HomeOutlined } from "@ant-design/icons";
import { useCustomerServiceRequestMutation } from "@/store/apis/coreApi";
import { displayError } from "@/utils/displayMessageUtils";
import { customerSericesMenu } from "../constant";
import { BRANCH_LIST } from "@/constant/options";
import { currencies } from "@/utils/currenciesUtils";
import { Link } from "react-router-dom";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const LockerRequest = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [postCustomerRequest, {isLoading}] = useCustomerServiceRequestMutation();
      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LockerRequestFormType>({
    defaultValues: {
        
    },
    resolver: yupResolver(lockerFormSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: LockerRequestFormType) => {
    if (!captchaValue) {
        messageApi.error("Please complete the reCAPTCHA to submit the form.")
        return;
      }
    
  };

  return (
    <>
    {contextHolder}

    <Container width="sm">

      <Row>
        <Col xs={24} style={{marginBottom:"2rem"}}>
        

          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">
                <HomeOutlined />
              </Link>
             </Breadcrumb.Item>

             <Breadcrumb.Item>
                <Dropdown menu={{items:customerSericesMenu}}>
                  <a href="#" onClick={e => e.preventDefault()}>
                    <Space>
                        Customer Services
                       <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
             </Breadcrumb.Item>

             <Breadcrumb.Item>
                Locker Request
            </Breadcrumb.Item>
          </Breadcrumb>
        
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
         <Card title="Locker Request">
             <form onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={30}>
                  
                  <Col xs={24} md={8}>
                    <InputField
                      label="Account Number"
                      name="accountNumber"
                      control={control}
                      error={errors.accountNumber?.message ?? ""}
                      placeholder="Enter your registered account number"
                      size="large"
                      required={true}
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <InputField
                      label="Account Name"
                      name="accountName"
                      control={control}
                      error={errors.accountName?.message ?? ""}
                      placeholder="Enter your name"
                      size="large"
                      required={true}
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <InputField
                      label="Mobile Number"
                      name="mobileNumber"            
                      control={control}
                      error={errors.mobileNumber?.message ?? ""}
                      placeholder="Enter your mobile number"
                      size="large"
                      required={true}
                    />
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <SelectField
                      options={BRANCH_LIST}
                      label="Branch"
                      name="branch"
                      control={control}
                      error={errors.branch?.message ?? ""}
                      placeholder="Branch"
                      size="large"
                      required={true}
                      showSearch={true}
                      fieldNames={{
                        label: "branchName",
                        value: "id"
                      }}
                    />
                  </Col>

            
                  
                 
                  <Col xs={24}>
                    <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
                  </Col>
                  
                </Row>
                <Col xs={24} style={{marginTop:"1rem"}}>
                  <Button type="primary" htmlType="submit" size="large" loading={isLoading} disabled={isLoading}>
                    Submit
                  </Button>
                </Col>
              </form>
         </Card>
             
          
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default LockerRequest;
