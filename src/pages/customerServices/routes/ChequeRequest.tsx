
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/components/Elements";
import { Button, Col, Row, message, Breadcrumb, Card, Dropdown, Space } from "antd";
import {  ChequeRequestType } from "../types";
import {  chequeRequestSchema } from "../schema";
import { InputField, RadioGroupField, SelectField } from "@/components/Form";

import { DownOutlined, HomeOutlined } from "@ant-design/icons";
import { useCustomerServiceRequestMutation } from "@/store/apis/coreApi";
import { displayError } from "@/utils/displayMessageUtils";
import { customerSericesMenu } from "../constant";
import { BRANCH_LIST } from "@/constant/options";
import { Link } from "react-router-dom";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const ChequeRequest = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [postCustomerRequest, {isLoading}] = useCustomerServiceRequestMutation();
      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChequeRequestType>({
    defaultValues: {
        
    },
    resolver: yupResolver(chequeRequestSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: ChequeRequestType) => {
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
                Cheque Request
            </Breadcrumb.Item>
          </Breadcrumb>
        
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
         <Card title="Cheque Request">
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
                    <InputField
                      label="Email"
                      name="email"            
                      control={control}
                      error={errors.email?.message ?? ""}
                      placeholder="Email"
                      size="large"
                      required={true}
                    />
                  </Col>
                 
                  <Col xs={24} md={8}>
                    <InputField
                      label="Number Of Leaves"
                      name="noOfLeaves"    
                      type="number"        
                      control={control}
                      error={errors.noOfLeaves?.message ?? ""}
                      placeholder="Enter number of leaves"
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
                  <Col xs={24} md={8}>
                    <RadioGroupField
                        label="Is Collector Different than Account Holder"
                        name="isCollectorDifferent"
                        control={control}
                        error={errors.isCollectorDifferent?.message ?? ""}
                        options={[
                            { label: "Yes", value: "Yes" },
                            { label: "No", value: "No" }
                        ]}
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

export default ChequeRequest;
