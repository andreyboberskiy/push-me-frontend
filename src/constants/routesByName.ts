export default {
  homePage: '/home',
  sign: '/sign',
  profilePage: '/profile',
  myTemplatesPage: '/my-templates',
  createTemplate: '/create-templates',
  template: (id: number | string = ':id') => `/template/${id}`,
};
