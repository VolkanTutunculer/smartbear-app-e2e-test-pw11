import {expect, Page } from "@playwright/test"

export class ScreenshoyUtils {

    static async takeScreenshot(page: Page) {
        await expect(page).toHaveScreenshot({
            fullPage: true
        });
    }
}



