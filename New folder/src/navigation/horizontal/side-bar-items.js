export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Calendar',
    route: 'apps-calendar',
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
    header: 'Marketing',
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
    header: 'Sales',
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
  {
    header: 'Others',
    title: 'Others',
    icon: 'MoreHorizontalIcon',
    children: [
      {
        title: 'Clients',
        route: 'clients',
        icon: 'UsersIcon',
      },
      {
        title: 'Contracts',
        route: 'contracts',
      },
      {
        title: 'Projects',
        route: 'projects',
      },
      {
        title: 'Tasks',
        route: 'apps-todo',
      },
      {
        title: 'Messages',
        route: 'messages',
      },
      {
        title: 'Tickets',
        route: 'tickets',
      },
      {
        title: 'Users',
        route: 'users',
      },
      {
        title: 'Notes',
        route: 'notes',
      },
      {
        title: 'Subscriptions',
        route: 'subscriptions',
      },
      {
        title: 'Knowledgebase',
        route: 'knowledgebase',
      },
      {
        title: 'Reports',
        route: 'reports',
      },
      {
        title: 'Settings',
        route: 'settings',
      },
      {
        title: 'File Manager',
        route: 'file-manager',
      },
    ],
  },
]
