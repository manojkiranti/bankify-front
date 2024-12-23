import { MenuType } from '@/types';

/**
 * todo: clearify the tabs for each menu
 * todo: dynamic DB should be maintained and fetch menu through api
 */
export const MENU_ITEMS: MenuType[] = [
  {
    key: '1',
    label: 'Dashboard',
    link: '/dashboard',
    icon: 'dashboard',
    // tabs: [{ label: 'Summary', link: '/dashboard/summary', key: 'summary' }],
  },
  // {
  //   key: '2',
  //   label: 'Profile',
  //   link: '/profile',
  //   icon: 'user',
  // },
  {
    key: '3',
    label: 'Mortgage',
    link: '/mortgage',
    icon: 'wallet', // Updated icon
    children: [
      {
        key: '3.1',
        label: 'Purchase',
        link: '/mortgage/purchase',
        parentKey: '3',
        // tabs: [
        //   {
        //     label: 'Calculator',
        //     link: '/mortgage/purchase/calculator',
        //     key: 'mCalc',
        //   },
        // ],
      },
      {
        key: '3.2',
        label: 'Refinance',
        link: '/mortgage/refinance',
        parentKey: '3',
      },
      {
        key: '3.3',
        label: 'Pre-approval',
        link: '/mortgage/preapproval',
        parentKey: '3',
      },
      {
        key: '3.4',
        label: 'Settled',
        link: '/mortgage/settled',
        parentKey: '3',
      },
    ],
  },
  {
    key: '4',
    label: 'Tax',
    link: '/tax',
    icon: 'percent', // Updated icon
    children: [
      {
        key: '4.1',
        label: 'Lodge Return',
        link: '/tax/lodge-return',
        parentKey: '4',
      },
      {
        key: '4.2',
        label: 'Tax Advice',
        link: '/tax/tax-advice',
        parentKey: '4',
      },
    ],
  },
  {
    key: '5',
    label: 'Calculators',
    link: '/calculators',
    icon: 'calc',
    // children: [
    //   {
    //     key: '5.1',
    //     label: 'Mortgage',
    //     link: '/calculators/mortgage',
    //     parentKey: '5',
    //   },
    // ],
  },
  {
    key: '6',
    label: 'FX',
    link: '/fx',
    icon: 'swap', // Updated icon,
    children: [
      {
        key: '6.1',
        label: 'OFX',
        link: '/fx/ofx',
        parentKey: '6',
      },
      {
        key: '6.2',
        label: 'TORFX',
        link: '/fx/torfx',
        parentKey: '6',
      },
    ],
  },
  // {
  //   key: '7',
  //   label: 'Useful',
  //   link: '/useful',
  //   icon: 'utils',
  //   // tabs: [{ label: 'Summary', link: '/dashboard/summary', key: 'summary' }],
  // },
];
