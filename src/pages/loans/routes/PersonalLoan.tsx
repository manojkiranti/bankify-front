import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/components/Elements";
import { Button, Col, Row, message, Breadcrumb, Card } from "antd";

import { InputField, SelectField } from "@/components/Form";
import { BRANCH_LIST } from "@/constant/options";
import { HomeOutlined } from "@ant-design/icons";
import { useCustomerServiceRequestMutation } from "@/store/apis/coreApi";
import { displayError } from "@/utils/displayMessageUtils";

import { LoanFormType } from "../types";
import { loanSchema } from "../schema";
import { loanMenu } from "../constant";



const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;





const PersonalLoan = () => {
    const { loantype } = useParams<{ loantype: string }>();
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [postCustomerRequest, {isLoading}] = useCustomerServiceRequestMutation();
    
    const loanTitles: Record<string, string> = {
        "home-loan": "Home Loan",
        "car-loan": "Car Loan",
        "gold-loan": "Gold Loan",
        "loan-against-share": "Loan Against Share",
        "credit-card": "Credit Card"
    };
    
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoanFormType>({
    defaultValues: {},
    resolver: yupResolver(loanSchema),
  });

  useEffect(() => {
    if(loantype) {
        setValue("loanType", loantype)
    }   
  },[loantype]);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: LoanFormType) => {
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
                title: <a href="">Loan Services</a>,
                menu: { items: loanMenu },
              },
              {
                title: loanTitles[loantype || ""] || "Loan",
              },
            ]}
          />
        
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
         <Card title={loanTitles[loantype || ""] || "Loan"}>
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
                      label="Account Name"
                      name="accountName"
                      control={control}
                      error={errors.accountName?.message ?? ""}
                      placeholder="Account Name"
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
                            {label:"Home Loan", value:"home-loan"},
                            {label:"Gold Loan", value:"gold-loan"},
                            {label:"Loan Against Share", value:"loan-against-share"},
                            {label:"Credit Card", value:"credit-card"}
                        ]}
                        name="loanType"
                        control={control}
                        label="Loan Type"
                        size="large"
                        placeholder="Select Loan Type"
                        error={errors.loanType?.message ?? ''}
                        required={true}
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <InputField
                      label="Loan Amount"
                      name="loanAmount"            
                      control={control}
                      error={errors.loanAmount?.message ?? ""}
                      placeholder="Loan Amount"
                      type="number"
                      size="large"
                      required={true}
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <InputField
                      label="Payback Period(in Years)"
                      name="paybackPeriod"            
                      control={control}
                      error={errors.paybackPeriod?.message ?? ""}
                      placeholder="Loan Amount"
                      type="number"
                      size="large"
                      required={true}
                      suffix="yrs"
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

export default PersonalLoan;
