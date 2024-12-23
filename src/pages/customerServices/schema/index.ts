import * as yup from 'yup';

export const fixedDepositSchema = yup.object().shape({
  accountNumber: yup
    .string()
    .required('Account number is required.'),
  mobileNumber: yup.string().required('Mobile number is required.'),
  email: yup.string().email().required('Email is required.'),
  depositAmount: yup.number().required('Depost amount is required.'),
  tenureMonths: yup.number().required('Tenure in month is required.'),
  interestRate: yup.string().required('Interest rate is required.'),
  applyingFrom: yup.string().required('Applying from is required.')
});

export const disputeClaimSchema = yup.object().shape({
  disputeType: yup.string().required('Dispute type is required'),
  accountNumber: yup.string().required('Account number is required'),
  accountName: yup.string().required('Account name is required'),
  transactionDate: yup.string().required('Transaction date is required'),
  disputeAmount: yup.number().required('Dispute amount is required'),
  transactionBank: yup.string().required('Transaction bank is required'),
  transactionLocation: yup.string().required('Transaction location is required'),
  contactNumber: yup.string().required('Contact number is required'),
  email: yup.string().email().required("Email address is required")
});
