export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/container/Home.vue'),
    meta: {
      pageTitle: 'Home',
      breadcrumb: [
        {
          text: 'Home',
          active: true,
        },
      ],
    },
  },
  {
    path: '/leads',
    name: 'leads',
    component: () => import('@/views/container/Leads.vue'),
    meta: {
      pageTitle: 'Leads',
      breadcrumb: [
        {
          text: 'Leads',
          active: true,
        },
      ],
    },
  },
  {
    path: '/deals',
    name: 'deals',
    component: () => import('@/views/container/Deals.vue'),
    meta: {
      pageTitle: 'Deals',
      breadcrumb: [
        {
          text: 'Deals',
          active: true,
        },
      ],
    },
  },
  {
    path: '/shipments',
    name: 'shipments',
    component: () => import('@/views/container/Shipments.vue'),
    meta: {
      pageTitle: 'Shipments',
      breadcrumb: [
        {
          text: 'Shipments',
          active: true,
        },
      ],
    },
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/container/Contacts.vue'),
    meta: {
      pageTitle: 'Contacts',
      breadcrumb: [
        {
          text: 'Contacts',
          active: true,
        },
      ],
    },
  },
  {
    path: '/campaign',
    name: 'campaign',
    component: () => import('@/views/container/Marketing/Campaign.vue'),
    meta: {
      pageTitle: 'Campaign',
      breadcrumb: [
        {
          text: 'Marketing',
        },
        {
          text: 'Campaign',
          active: true,
        },
      ],
    },
  },
  {
    path: '/media-templates',
    name: 'media-templates',
    component: () => import('@/views/container/Marketing/MediaTemplates.vue'),
    meta: {
      pageTitle: 'Media Templates',
      breadcrumb: [
        {
          text: 'Marketing',
        },
        {
          text: 'Media Templates',
          active: true,
        },
      ],
    },
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('@/views/container/Marketing/Media.vue'),
    meta: {
      pageTitle: 'Media',
      breadcrumb: [
        {
          text: 'Marketing',
        },
        {
          text: 'Media',
          active: true,
        },
      ],
    },
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/container/Clients.vue'),
    meta: {
      pageTitle: 'Clients',
      breadcrumb: [
        {
          text: 'Clients',
          active: true,
        },
      ],
    },
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import('@/views/container/Sales/Invoices.vue'),
    meta: {
      pageTitle: 'Invoices',
      breadcrumb: [
        {
          text: 'Sales',
        },
        {
          text: 'Invoices',
          active: true,
        },
      ],
    },
  },
  {
    path: '/estimates',
    name: 'estimates',
    component: () => import('@/views/container/Sales/Estimates.vue'),
    meta: {
      pageTitle: 'Estimates',
      breadcrumb: [
        {
          text: 'Sales',
        },
        {
          text: 'Estimates',
          active: true,
        },
      ],
    },
  },
  {
    path: '/credit-notes',
    name: 'credit-notes',
    component: () => import('@/views/container/Sales/CreditNotes.vue'),
    meta: {
      pageTitle: 'Credit Notes',
      breadcrumb: [
        {
          text: 'Sales',
        },
        {
          text: 'Credit Notes',
          active: true,
        },
      ],
    },
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: () => import('@/views/container/Sales/Expenses.vue'),
    meta: {
      pageTitle: 'Expenses',
      breadcrumb: [
        {
          text: 'Sales',
        },
        {
          text: 'Expenses',
          active: true,
        },
      ],
    },
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import('@/views/container/Sales/Payments.vue'),
    meta: {
      pageTitle: 'Payments',
      breadcrumb: [
        {
          text: 'Sales',
        },
        {
          text: 'Payments',
          active: true,
        },
      ],
    },
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/container/Sales/Products.vue'),
    meta: {
      pageTitle: 'Products',
      breadcrumb: [
        {
          text: 'Sales',
        },
        {
          text: 'Products',
          active: true,
        },
      ],
    },
  },
  {
    path: '/tax-rates',
    name: 'tax-rates',
    component: () => import('@/views/container/Sales/TaxRates.vue'),
    meta: {
      pageTitle: 'Tax Rates',
      breadcrumb: [
        {
          text: 'Sales',
        },
        {
          text: 'Tax Rates',
          active: true,
        },
      ],
    },
  },
  {
    path: '/contracts',
    name: 'contracts',
    component: () => import('@/views/container/Contracts.vue'),
    meta: {
      pageTitle: 'Contracts',
      breadcrumb: [
        {
          text: 'Contracts',
          active: true,
        },
      ],
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/container/Projects.vue'),
    meta: {
      pageTitle: 'Projects',
      breadcrumb: [
        {
          text: 'Projects',
          active: true,
        },
      ],
    },
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('@/views/container/Messages.vue'),
    meta: {
      pageTitle: 'Messages',
      breadcrumb: [
        {
          text: 'Messages',
          active: true,
        },
      ],
    },
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: () => import('@/views/container/Tickets.vue'),
    meta: {
      pageTitle: 'Tickets',
      breadcrumb: [
        {
          text: 'Tickets',
          active: true,
        },
      ],
    },
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/container/Users.vue'),
    meta: {
      pageTitle: 'Users',
      breadcrumb: [
        {
          text: 'Users',
          active: true,
        },
      ],
    },
  },
  {
    path: '/notes',
    name: 'notes',
    component: () => import('@/views/container/Notes.vue'),
    meta: {
      pageTitle: 'Notes',
      breadcrumb: [
        {
          text: 'Notes',
          active: true,
        },
      ],
    },
  },
  {
    path: '/subscriptions',
    name: 'subscriptions',
    component: () => import('@/views/container/Subscriptions.vue'),
    meta: {
      pageTitle: 'Subscriptions',
      breadcrumb: [
        {
          text: 'Subscriptions',
          active: true,
        },
      ],
    },
  },
  {
    path: '/knowledgebase',
    name: 'knowledgebase',
    component: () => import('@/views/container/Knowledgebase.vue'),
    meta: {
      pageTitle: 'Knowledgebase',
      breadcrumb: [
        {
          text: 'Knowledgebase',
          active: true,
        },
      ],
    },
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import('@/views/container/Reports.vue'),
    meta: {
      pageTitle: 'Reports',
      breadcrumb: [
        {
          text: 'Reports',
          active: true,
        },
      ],
    },
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/container/Settings.vue'),
    meta: {
      pageTitle: 'Settings',
      breadcrumb: [
        {
          text: 'Settings',
          active: true,
        },
      ],
    },
  },
  {
    path: '/file-manager',
    name: 'file-manager',
    component: () => import('@/views/container/FileManager.vue'),
    meta: {
      pageTitle: 'File Manager',
      breadcrumb: [
        {
          text: 'File Manager',
          active: true,
        },
      ],
    },
  },
]
