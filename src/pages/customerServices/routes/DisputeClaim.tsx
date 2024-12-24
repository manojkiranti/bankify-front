import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/components/Elements";
import { Button, Col, Row, message, Breadcrumb, Card, Dropdown, Space } from "antd";
import { DisputeClaimType } from "../types";
import { disputeClaimSchema } from "../schema";
import { DatePickerField, InputField, SelectField } from "@/components/Form";

import { DownOutlined, HomeOutlined } from "@ant-design/icons";
import { useCustomerServiceRequestMutation } from "@/store/apis/coreApi";
import { displayError } from "@/utils/displayMessageUtils";
import { customerSericesMenu } from "../constant";
import { Link } from "react-router-dom";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const DisputeClaim = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [postCustomerRequest, {isLoading}] = useCustomerServiceRequestMutation();
      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DisputeClaimType>({
    defaultValues: {
        
    },
    resolver: yupResolver(disputeClaimSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: DisputeClaimType) => {
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
                Dispute Claim
            </Breadcrumb.Item>
          </Breadcrumb>
        
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
         <Card title="Dispute Claim">
             <form onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={30}>
                  <Col xs={24} md={8}>
                    <SelectField
                      options={[
                        {
                            label: "ATM/POS/Ecommerce",
                            value: "atm_pos_ecommerce"
                        },
                        {
                            label: "Mobile Banking/QR",
                            value: "mobile_banking_qr",
                        },
                        {
                            label: "Internet Banking",
                            value: "internet_banking",
                        }
                      ]}
                      label="Dispute Type"
                      name="disputeType"
                      control={control}
                      error={errors.disputeType?.message ?? ""}
                      placeholder="Select dispute type"
                      size="large"
                      required={true}
                    />
                  </Col>
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
                    <DatePickerField
                        control={control}
                        label="Transaction Date"
                        name="transactionDate"
                        size="large"
                        placeholder="Select Date of Transaction"
                        error={errors?.transactionDate?.message}
                        required={true}
                    />
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <InputField
                      label="Claim/Dispute Amount"
                      name="disputeAmount"            
                      control={control}
                      error={errors.disputeAmount?.message ?? ""}
                      placeholder="Email"
                      size="large"
                      required={true}
                      type="number"
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <InputField
                      label="Transaction Bank/Merchant"
                      name="transactionBank"            
                      control={control}
                      error={errors.transactionBank?.message ?? ""}
                      size="large"
                      required={true}
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <InputField
                      label="Transaction Location/Country"
                      name="transactionLocation"            
                      control={control}
                      error={errors.transactionLocation?.message ?? ""}
                      size="large"
                      required={true}
                    />
                  </Col>
                 

                  <Col xs={24} md={8}>
                    <InputField
                      label="Contact Number"
                      name="contactNumber"            
                      control={control}
                      error={errors.contactNumber?.message ?? ""}
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

export default DisputeClaim;
