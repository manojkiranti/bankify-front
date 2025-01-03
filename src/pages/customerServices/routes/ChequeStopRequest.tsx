
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/components/Elements";
import { Button, Col, Row, message, Breadcrumb, Card, Dropdown, Space } from "antd";
import {  ChequeRequestType, ChequeStopPaymentType } from "../types";
import {  chequeRequestSchema, chequeStopPaymentSchema } from "../schema";
import { InputField, RadioGroupField, SelectField } from "@/components/Form";

import { DownOutlined, HomeOutlined } from "@ant-design/icons";
import { useCustomerServiceRequestMutation } from "@/store/apis/coreApi";
import { displayError } from "@/utils/displayMessageUtils";
import { customerSericesMenu } from "../constant";
import { BRANCH_LIST } from "@/constant/options";
import { Link } from "react-router-dom";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const ChequeStopRequest = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [postCustomerRequest, {isLoading}] = useCustomerServiceRequestMutation();
      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChequeStopPaymentType>({
    defaultValues: {
        
    },
    resolver: yupResolver(chequeStopPaymentSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: ChequeStopPaymentType) => {
    if (!captchaValue) {
        messageApi.error("Please complete the reCAPTCHA to submit the form.")
        return;
      }
      postCustomerRequest({action:"debit_card_register", data})
      .then(response => {
        messageApi.success("Your debit card request has been submitted successfully.")
      })
      .catch(err => {
        displayError(err)
      })
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
                Cheque Stop Payment
            </Breadcrumb.Item>
          </Breadcrumb>
        
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
         <Card title="Cheque Stop Payment">
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
                        options={[
                            {label: "Court Order", value: "court_order"},
                            {label: "Dispute", value: "dispute"},
                            {label: "Cheque Reported As Lost", value: "cheque_reported_lost"},
                            {label: "Cheque Reported As Misplaced", value: "cheque_reported_misplaced"},
                            {label: "Stop Payment Request Over Telephone", value: "stop_payment_telephone"},
                            {label: "Cheque Reported As Stolen", value: "cheque_reported_stolen"},
                            {label: "Stop Payment Reported Due To Other Reason", value: "other_reason"},
                            {label: "Wrongly Delivered", value: "wrongly_delivered"}
                        ]}
                        label="Reason"
                        name="reason"
                        control={control}
                        error={errors.reason?.message ?? ""}
                        placeholder="Reason"
                        size="large"
                        required={true}
                        showSearch={true}
                        
                        />
                  </Col>
                 
                  <Col xs={24} md={8}>
                    <InputField
                      label="Amount"
                      name="amount"    
                      type="number"        
                      control={control}
                      error={errors.amount?.message ?? ""}
                      placeholder="Amount"
                      size="large"
                      required={true}
                    />
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <InputField
                      label="Cheque Number"
                      name="chequeNumber"         
                      control={control}
                      error={errors.chequeNumber?.message ?? ""}
                      placeholder="Cheque Number"
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

export default ChequeStopRequest;
