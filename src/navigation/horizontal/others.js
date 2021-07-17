export default [
  {
    header: 'Others',
    icon: 'MoreHorizontalIcon',
    children: [
      {
        path: '/contracts',
        name: 'contracts',
        component: () => import('@/views/Contracts.vue'),
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
        component: () => import('@/views/Projects.vue'),
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
        path: '/tasks',
        name: 'tasks',
        component: () => import('@/views/Tasks.vue'),
        meta: {
          pageTitle: 'Tasks',
          breadcrumb: [
            {
              text: 'Tasks',
              active: true,
            },
          ],
        },
      },
      {
        path: '/messages',
        name: 'messages',
        component: () => import('@/views/Messages.vue'),
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
        component: () => import('@/views/Tickets.vue'),
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
        component: () => import('@/views/Users.vue'),
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
        component: () => import('@/views/Notes.vue'),
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
        component: () => import('@/views/Subscriptions.vue'),
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
        component: () => import('@/views/Knowledgebase.vue'),
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
        component: () => import('@/views/Reports.vue'),
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
        component: () => import('@/views/Settings.vue'),
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
        component: () => import('@/views/FileManager.vue'),
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
    ],
  },
]
