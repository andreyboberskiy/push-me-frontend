export default {
  homePage: '/home',
  signUp: '/sign-up',
  signIn: '/sign-in',
  profilePage: '/profile',
  myTemplatesPage: '/my-templates',
  createTemplate: '/create-templates',
  template: (id: number | string = ':id') => `/template/${id}`,
};
