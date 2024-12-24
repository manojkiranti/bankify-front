
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import dayjs from 'dayjs';
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/components/Elements";
import { Button, Col, Row, message, Breadcrumb, Card } from "antd";
import {  BankGuranteeVerificationFormType } from "../types";
import {  bankGuraneeVerificationSchema } from "../schema";
import { DatePickerField, InputField, RadioGroupField, SelectField } from "@/components/Form";

import { HomeOutlined } from "@ant-design/icons";
import { useCustomerServiceRequestMutation } from "@/store/apis/coreApi";
import { displayError } from "@/utils/displayMessageUtils";
import { documentVerificationMenu } from "../constant";
import { BRANCH_LIST } from "@/constant/options";
import { currencies } from "@/utils/currenciesUtils";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const BankGuranteeVerification = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [postCustomerRequest, {isLoading}] = useCustomerServiceRequestMutation();
      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BankGuranteeVerificationFormType>({
    defaultValues: {
        
    },
    resolver: yupResolver(bankGuraneeVerificationSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: BankGuranteeVerificationFormType) => {
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
          <Breadcrumb
            items={[
              {
                href: '/',
                title: <HomeOutlined />,
              },
              {
                title: <a href="">Document Verification</a>,
                menu: { items: documentVerificationMenu },
              },
              {
                title: 'Bank Gurantee Verification',
              },
            ]}
          />
        
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
         <Card title="Bank Gurantee Verification">
             <form onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={30}>
                  
                  <Col xs={24} md={8}>
                    <InputField
                      label="Reference Number"
                      name="referenceNumber"
                      control={control}
                      error={errors.referenceNumber?.message ?? ""}
                      placeholder="Enter your reference number"
                      size="large"
                      required={true}
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <InputField
                      label="Gurantee Amount"
                      name="guranteeAmount"
                      type="number"
                      control={control}
                      error={errors.guranteeAmount?.message ?? ""}
                      placeholder="Enter gurantee amount"
                      size="large"
                      required={true}
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

export default BankGuranteeVerification;
