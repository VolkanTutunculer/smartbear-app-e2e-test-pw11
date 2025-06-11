import { test as base, expect } from '@playwright/test'
import { BasePage } from '../pages/BasePage'
import { LoginPage } from '../pages/LoginPage'

type PageObject = {
    basePage: BasePage,
    loginPage: LoginPage
}

export const test = base.extend<PageObject>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page)
        // Actions
        use(basePage);
    },

    loginPage: async ({ page }, use) => {
        await page.goto('');
        const loginPage = new LoginPage(page)

        use(loginPage);
    }
});

export { expect} from '@playwright/test'
