export default {
  homePage: { route: '/home', breadCrumb: 'Home' },
  signUp: '/sign-up',
  signIn: '/sign-in',
  dashboard: { route: '/dashboard', breadCrumb: 'Dashboard' },
  profile: { route: '/profile', breadCrumb: 'Profile' },
  billing: { route: '/billing', breadCrumb: 'Billing' },
  settings: { route: '/settings', breadCrumb: 'Settings' },
  myTemplates: { route: '/my-templates', breadCrumb: 'My templates' },
  templateDetails: {
    route: (id: number | string = ':id') => `/my-templates/${id}`,
    breadCrumb: 'inject',
  },
  findTemplates: { route: '/find-templates', breadCrumb: 'Find templates' },
};
