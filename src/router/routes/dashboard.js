/* eslint-disable semi */
/* eslint-disable quotes */
export default [
  {
    path: "/dashboard/analytics",
    name: "dashboard-analytics",
    component: () => import("@/views/dashboard/analytics/Analytics.vue"),
  },
  {
    path: "/dashboard/ecommerce",
    name: "dashboard-ecommerce",
    component: () => import("@/views/dashboard/ecommerce/Ecommerce.vue"),
  },
];
