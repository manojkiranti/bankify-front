import { faCreditCard, faCreditCardFront, faWindowRestore, faBan, faLockOpen, 
    faMobile, faMobileRetro, faSignalStreamSlash, faCheckToSlot, faMoneyBillTransfer, faBadgeCheck, 
    faSackDollar, faMoneyCheckPen, faShield, faMessageDots, faOctagonExclamation, faFileCertificate, faCloudCheck,
    faHome, faCoin, faMoneyBillTrendUp
 } from "@fortawesome/pro-light-svg-icons";


export const cardServices = [
    {
        title: "New Debit Card",
        icon: faCreditCard,
        link: 'card/new-debit-card',
        name: 'newDebitCard'
    },
    {
        title: "New Credit Card",
        icon: faCreditCardFront,
        link: 'card/new-credit-card',
        name: 'newCreditCard'
    },
    {
        title: "Re-Pin Debit Card",
        icon: faWindowRestore,
        link: 'card/repin-request',
        name: 'repinDebitCard'
    },
    {
        title: "Debit Card Block",
        icon: faBan,
        link: 'card/debit-card-block',
        name: 'debitCardBlock'
    },
    {
        title: "Debit Card Unblock",
        icon: faLockOpen,
        link: 'card/debit-card-unblock',
        name: 'debitCardUnblock'
    }
]

export const mobileBankingServices = [
    {
        title: "New Registration",
        icon: faMobile,
        link: 'mobank/new-registration',
        name: 'mobankRegister'
    },
    {
        title: "PIN Reset",
        icon: faMobileRetro,
        link: 'mobank/reset-pin',
        name: 'mobankPinReset'
    },
    {
        title: "Deactivate",
        icon: faSignalStreamSlash,
        link: 'mobank/deactivate',
        name: 'mobankDeactivate'
    },
    {
        title: "Activate",
        icon: faCheckToSlot,
        link: 'mobank/activate',
        name: 'mobankActivate'
    }
]

export const customerServices = [
    {
        title: "Open Fixed Deposit",
        icon: faMoneyBillTransfer,
        link: 'customer-service/fixed-deposit',
        name: 'fdOpenAccount'
    },
    {
        title: "Dispute Claim",
        icon: faBadgeCheck,
        link: 'customer-service/dispute-claim',
        name: 'disputeClaim'
    },
    {
        title: "Block Account(Hack/Scam)",
        icon: faShield,
        link: 'customer-service/account-freeze',
        name: 'accountFreeze'
    },
    {
        title: "Cheque Request",
        icon: faMessageDots,
        link: 'customer-service/cheque-request',
        name: 'chequeRequest'
    },
    {
        title: "Cheque Stop",
        icon: faOctagonExclamation,
        link: 'customer-service/cheque-stop',
        name: 'chequeStop'
    },
    {
        title: "Balance Certificate",
        icon: faFileCertificate,
        link: 'customer-service/balance-certificate-request',
        name: 'balanceCertificate'
    },
    {
        title: "Locker Request",
        icon: faFileCertificate,
        link: 'customer-service/locker-request',
        name: 'lockerRequest'
    }
]


export const tellerServices = [
    {
        title: "Cash Deposit",
        icon: faSackDollar,
        link: 'teller-service/cash-deposit',
        name: 'cashDeposit'
    },
    {
        title: "Cheque Deposit",
        icon: faMoneyCheckPen,
        link: 'teller-service/cheque-deposit',
        name: 'chequeDeposit'
    }
]

export const documentVerificationServices = [
    {
        title: "Bank Gurantee Verification",
        icon: faCloudCheck,
        link: 'document-verification/bank-guarantee',
        name: 'bankGuraneeVerification'
    }
]

export const loanServices = [
    {
        title: "Home Loan",
        icon: faHome,
        link: 'loan/home-loan',
        name: 'homeLoan'
    },
    {
        title: "Gold Loan",
        icon: faCoin,
        link: 'loan/gold-loan',
        name: 'goldLoan'
    },
    {
        title: "Loan Against Share",
        icon: faMoneyBillTrendUp,
        link: 'loan/loan-against-share',
        name: 'loanAgainstShare'
    },
    {
        title: "Credit Card",
        icon: faCreditCard,
        link: 'loan/credit-card',
        name: 'creditCardLoan'
    }
]