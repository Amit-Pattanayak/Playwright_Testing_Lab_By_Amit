

import { test as base }  from 'playwright-bdd'
import { SwagLoginPage } from '../Pages/Swag_lab_loginObj'



export const test = base.extend(({
  swag_lab_loginPage: async ({ page }, use) => {
    const swag_lab_loginPage = new SwagLoginPage(page);
    await use(swag_lab_loginPage);
  }

}));

/*
import { test as base } from 'playwright-bdd';
import { SwagLoginPage } from '../Pages/Swag_lab_loginObj.js';

export const test = base.extend({
  swag_lab_loginPage: async ({ page }, use) => {
    const swag_lab_loginPage = new SwagLoginPage(page);
    await use(swag_lab_loginPage);
  },
});
*/
