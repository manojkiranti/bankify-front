import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/components/Elements";
import { Button, Col, Row, message, Breadcrumb, Card } from "antd";
import { FixedDepositType } from "../types";
import { fixedDepositSchema } from "../schema";
import { InputField, SelectField } from "@/components/Form";

import { HomeOutlined } from "@ant-design/icons";
import { useCustomerServiceRequestMutation } from "@/store/apis/coreApi";
import { displayError } from "@/utils/displayMessageUtils";
import { customerSericesMenu } from "../constant";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const FixedDeposit = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [postCustomerRequest, {isLoading}] = useCustomerServiceRequestMutation();
      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FixedDepositType>({
    defaultValues: {
        interestRate:"3.5"
    },
    resolver: yupResolver(fixedDepositSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: FixedDepositType) => {
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
          <Breadcrumb
            items={[
              {
                href: '/',
                title: <HomeOutlined />,
              },
              {
                title: <a href="">Customer Services</a>,
                menu: { items: customerSericesMenu },
              },
              {
                title: 'Fixed Deposit',
              },
            ]}
          />
        
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
         <Card title="Fixed Deposit">
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
                      label="Mobile Number"
                      name="mobileNumber"
                      control={control}
                      error={errors.mobileNumber?.message ?? ""}
                      placeholder="Enter you registered mobile number"
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
                    <SelectField
                      options={[
                        {
                            label: "Inside Country",
                            value: "inside_country"
                        },
                        {
                            label: "Outside Country",
                            value: "outside_country",
                        }
                      ]}
                      label="Applying From"
                      name="applyingFrom"
                      control={control}
                      error={errors.applyingFrom?.message ?? ""}
                      placeholder="Branch"
                      size="large"
                      required={true}
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <SelectField
                      options={Array.from({ length: 139 }, (_, index) => ({
                        label: (index + 2).toString(),  // labels will be from 2 to 140
                        value: (index + 2).toString()   // values will be from 2 to 140
                      }))}
                      label="Tenure(In Months)"
                      name="tenureMonths"
                      control={control}
                      error={errors.tenureMonths?.message ?? ""}
                      placeholder="Tenure in months"
                      size="large"
                      required={true}
                      showSearch={true}
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <InputField
                      label="Interest Rate"
                      name="interestRate"            
                      control={control}
                      error={errors.interestRate?.message ?? ""}
                      placeholder="Email"
                      size="large"
                      required={true}
                      readonly={true}
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

export default FixedDeposit;
