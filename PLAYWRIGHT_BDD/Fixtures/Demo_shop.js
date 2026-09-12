
import { test as base }  from 'playwright-bdd'
import { DemoShop } from '../Pages/Demo_web_loginObj'

export const test = base.extend(({
  demo_loginPage: async ({ page }, use) => {
    const demo_loginPage = new DemoShop(page);
    await use(demo_loginPage);
  }

}));