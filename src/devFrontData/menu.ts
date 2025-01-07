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
    label: 'Mobile Banking',
    link: '/mobile-banking',
    icon: 'mobile', // Updated icon
  
  },
  {
    key: '4',
    label: 'Card',
    link: '/card',
    icon: 'card', // Updated icon
  },
  {
    key: '5',
    label: 'Customer Service',
    link: '/customer-service',
    icon: 'customerService', // Updated icon
  }
];
