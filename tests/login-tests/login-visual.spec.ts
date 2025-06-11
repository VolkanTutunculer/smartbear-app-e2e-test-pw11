import { test, expect } from './../../fixtures/PageObject';
import { LoginPage } from '../../pages/LoginPage';
import { ScreenshoyUtils } from '../../utils/ScreenshoyUtils';

test.describe('SmartBear App Login Page visual verifitication', () => {
    // let loginPage: LoginPage;
    // test.beforeEach(async ({ page }) => {
    //     await page.goto('');
    //     loginPage = new LoginPage(page);
    // });

    test('Login Page Visual Regression', async ({ loginPage }) => {
        await expect(loginPage.loginForm).toBeVisible();
        await ScreenshoyUtils.takeScreenshot(loginPage.page);
    });

}) 