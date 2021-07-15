/* eslint-disable semi */
/* eslint-disable quotes */
export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Calendar',
    route: 'calendar',
    icon: 'CalendarIcon',
  },
  {
    title: 'Leads',
    route: 'leads',
    icon: 'PhoneCallIcon',
  },
  {
    title: 'Deals',
    route: 'deals',
    icon: 'AwardIcon',
  },
  {
    title: 'Shipments',
    route: 'shipments',
    icon: 'MapPinIcon',
  },
  {
    title: 'Contacts',
    route: 'contacts',
    icon: 'BookIcon',
  },
  {
    title: 'Marketing',
    icon: 'ImageIcon',
    children: [
      {
        title: 'Campaign',
        route: 'campaign',
      },
      {
        title: 'Media Templates',
        route: 'media-templates',
      },
      {
        title: 'Media',
        route: 'media',
      },
    ],
  },
  {
    title: 'Clients',
    route: 'clients',
    icon: 'UsersIcon',
  },
  {
    title: 'Sales',
    icon: 'DatabaseIcon',
    children: [
      {
        title: 'Invoices',
        route: 'invoices',
      },
      {
        title: 'Estimates',
        route: 'estimates',
      },
      {
        title: 'Credit Notes',
        route: 'credit-notes',
      },
      {
        title: 'Expenses',
        route: 'expenses',
      },
      {
        title: 'Payments',
        route: 'payments',
      },
      {
        title: 'Products',
        route: 'products',
      },
      {
        title: 'Tax Rates',
        route: 'tax-rates',
      },
    ],
  },
]
