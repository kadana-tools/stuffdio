const emailRouteComponent = () => import('@/pages/apps/email/index.vue')

// 👉 Redirects
export const redirects = [
  {
    path: '/',
    name: 'index',
    redirect: '/overview',  // Redirect using the path instead of the name
  },
]
export const routes = [
  // // Email filter
  // {
  //   path: '/apps/email/filter/:filter',
  //   name: 'apps-email-filter',
  //   component: emailRouteComponent,
  //   meta: {
  //     navActiveLink: 'apps-email',
  //     layoutWrapperClasses: 'layout-content-height-fixed',
  //   },
  // },

  // // Email label
  // {
  //   path: '/apps/email/label/:label',
  //   name: 'apps-email-label',
  //   component: emailRouteComponent,
  //   meta: {
  //     // contentClass: 'email-application',
  //     navActiveLink: 'apps-email',
  //     layoutWrapperClasses: 'layout-content-height-fixed',
  //   },
  // },
  {
    path: '/dashboards/logistics',
    name: 'dashboards-logistics',
    component: () => import('@/pages/apps/logistics/dashboard.vue'),
  },
  {
    path: '/dashboards/academy',
    name: 'dashboards-academy',
    component: () => import('@/pages/apps/academy/dashboard.vue'),
  },
  {
    path: '/apps/ecommerce/dashboard',
    name: 'apps-ecommerce-dashboard',
    component: () => import('@/pages/dashboards/ecommerce.vue'),
  },
]
