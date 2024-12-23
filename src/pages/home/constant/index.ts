import { faCreditCard, faCreditCardFront, faWindowRestore, faBan, faLockOpen, 
    faMobile, faMobileRetro, faSignalStreamSlash, faCheckToSlot, faMoneyBillTransfer, faBadgeCheck, faCheckDouble, faQrcode, faCartShopping, faMoneyBillTrendUp } from "@fortawesome/pro-light-svg-icons";


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
    }
]
