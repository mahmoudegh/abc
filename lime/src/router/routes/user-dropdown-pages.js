export default [
  {
    path: "/reminders",
    name: "reminders",
    component: () => import("@/views/container/user-dropdown-pages/Reminders.vue"),
    meta: {
      pageTitle: "Reminders",
      breadcrumb: [
        {
          text: "Reminders",
          active: true,
        },
      ],
    },
  },
  {
    path: "/tell-friend",
    name: "tell-friend",
    component: () => import("@/views/container/user-dropdown-pages/TellFriend.vue"),
    meta: {
      pageTitle: "Tell Friend",
      breadcrumb: [
        {
          text: "Tell Friend",
          active: true,
        },
      ],
    },
  },
  {
    path: "/canned-responses",
    name: "canned-responses",
    component: () => import("@/views/container/user-dropdown-pages/CannedResponses.vue"),
    meta: {
      pageTitle: "Canned Responses",
      breadcrumb: [
        {
          text: "Canned Responses",
          active: true,
        },
      ],
    },
  },
  {
    path: "/notifications",
    name: "notifications",
    component: () => import("@/views/container/user-dropdown-pages/Notifications.vue"),
    meta: {
      pageTitle: "Notifications",
      breadcrumb: [
        {
          text: "Notifications",
          active: true,
        },
      ],
    },
  },
];
