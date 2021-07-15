import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
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
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/apps/calendar/Calendar.vue'),
      meta: {
        pageTitle: 'Calendar',
        breadcrumb: [
          {
            text: 'Calendar',
            active: true,
          },
        ],
      },
    },
    {
      path: '/leads',
      name: 'leads',
      component: () => import('@/views/Leads.vue'),
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
      component: () => import('@/views/Deals.vue'),
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
      component: () => import('@/views/Shipments.vue'),
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
      component: () => import('@/views/Contacts.vue'),
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
      component: () => import('@/views/Marketing/Campaign.vue'),
      meta: {
        pageTitle: 'Campaign',
        breadcrumb: [
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
      component: () => import('@/views/Marketing/MediaTemplates.vue'),
      meta: {
        pageTitle: 'Media Templates',
        breadcrumb: [
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
      component: () => import('@/views/Marketing/Media.vue'),
      meta: {
        pageTitle: 'Media',
        breadcrumb: [
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
      component: () => import('@/views/Clients.vue'),
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
      component: () => import('@/views/Sales/Invoices.vue'),
      meta: {
        pageTitle: 'Invoices',
        breadcrumb: [
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
      component: () => import('@/views/Sales/Estimates.vue'),
      meta: {
        pageTitle: 'Estimates',
        breadcrumb: [
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
      component: () => import('@/views/Sales/CreditNotes.vue'),
      meta: {
        pageTitle: 'Credit Notes',
        breadcrumb: [
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
      component: () => import('@/views/Sales/Expenses.vue'),
      meta: {
        pageTitle: 'Expenses',
        breadcrumb: [
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
      component: () => import('@/views/Sales/Payments.vue'),
      meta: {
        pageTitle: 'Payments',
        breadcrumb: [
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
      component: () => import('@/views/Sales/Products.vue'),
      meta: {
        pageTitle: 'Products',
        breadcrumb: [
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
      component: () => import('@/views/Sales/TaxRates.vue'),
      meta: {
        pageTitle: 'Tax Rates',
        breadcrumb: [
          {
            text: 'Tax Rates',
            active: true,
          },
        ],
      },
    },
    {
      path: '/apps/email',
      name: 'apps-email',
      component: () => import('@/views/apps/email/Email.vue'),
      meta: {
        contentRenderer: 'sidebar-left',
        contentClass: 'email-application',
      },
    },
    {
      path: '/apps/todo',
      name: 'apps-todo',
      component: () => import('@/views/apps/todo/Todo.vue'),
      meta: {
        contentRenderer: 'sidebar-left',
        contentClass: 'todo-application',
      },
    },
    {
      path: '/apps/chat',
      name: 'apps-chat',
      component: () => import('@/views/apps/chat/Chat.vue'),
      meta: {
        contentRenderer: 'sidebar-left',
        contentClass: 'chat-application',
      },
    },
    {
      path: '/apps/calendar',
      name: 'apps-calendar',
      component: () => import('@/views/apps/calendar/Calendar.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
