import * as yup from 'yup';

export const cashDepositSchema = yup.object().shape({
  depositAccountNumber: yup
    .string()
    .required('Deposit account number is required.'),
  depositAccountName: yup.string().required('Deposit account holder name is required.'),
  currency: yup.string().required('Currency is required.'),
  branch: yup.string().required('Branch is required.')
});


export const chequeDepositSchema = yup.object().shape({
    depositAccountNumber: yup
      .string()
      .required('Deposit account number is required.'),
    depositAccountName: yup.string().required('Deposit account holder name is required.'),
    currency: yup.string().required('Currency is required.'),
    branch: yup.string().required('Branch is required.')
  });
  