import * as yup from 'yup';
import { disputeClaimSchema, fixedDepositSchema } from '../schema';

export type FixedDepositType = yup.InferType<typeof fixedDepositSchema>;
export type DisputeClaimType = yup.InferType<typeof disputeClaimSchema>;


