import * as yup from 'yup';

export const bankGuraneeVerificationSchema = yup.object().shape({
  referenceNumber: yup
    .string()
    .required('Reference number is required.'),
  guranteeAmount: yup.number().required('Gurantee amount is required.')
});