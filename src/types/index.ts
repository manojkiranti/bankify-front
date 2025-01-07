export type ApiResponse<T> = {
  success: boolean;
  statusCode: number;
  data: T;
};

export type AuthUser = {
  email: string;
  name: string;
  isAdmin?: boolean;
  is2FAEnabled?: boolean;
};

export interface MenuTabType {
  label: string;
  link: string;
  key: string;
}

export interface MenuType {
  key: string;
  label: string;
  link?: string;
  icon?: string;
  children?: MenuType[];
  subNavigation?: MenuType[];
  parentKey?: string;
  tabs?: MenuTabType[];
}

export type SelectCardDataType = {
  id: number;
  icon: string;
  title: string;
  subTitle?: string;
  name?: string;
};

export type UserProfile = {
  fullname: string;
  citizenship?: string;
  country?: string;
  currentResidentalStatus?: string;
  maritalStatus?: string;
  permanentResident?: boolean;
  dependentChildren?: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  refinancePriority?: string[];
  numberOfDependents?: number;
  incomeSource?: string;
  salaryCurrency?: string;
  baseSalary?: number;
  salaryFrequency?: string;
  jobStartMonth?: string;
  jobStartYear?: string;
  occupation?: string;
  operationStartMonth?: string;
  operationStartYear?: number;
  industry?: string;
  companySalaryCurrency?: string;
  residentalOtherSpecification?: string;
  rentExpense?: number;
  frequencyOfRent?: string;
  isTheResidentialPlaceMortgaged?: boolean;
  countryCode?: string;
  phone?: string;
  tfn_number?: string;
};

export type ActionType = "debit_card_register" | "credit_card_register" | "repin_debit_card" | "debit_card_block" 
| "debit_card_unblock" | "mobile_banking_register" | "mobile_banking_reset_pin" | "mobile_banking_block" | "mobile_banking_unblock"
export interface CustomerRequestPayload<T> {
  action: ActionType;
  data: T;
}