export default {
  homePage: '/home',
  signUp: '/sign-up',
  signIn: '/sign-in',
  dashboard: '/dashboard',
  profile: '/profile',
  billing: '/billing',
  settings: '/setting',
  myTemplates: '/my-templates',
  findTemplates: '/find-templates',
  createTemplate: '/create-templates',
  template: (id: number | string = ':id') => `/template/${id}`,
};
