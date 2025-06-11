import { Page, expect } from "@playwright/test"

export class BasePage {

    readonly page: Page;
    constructor(page) {
        this.page = page;

        // Common locators
    }

    // reusable methods/comands


}
