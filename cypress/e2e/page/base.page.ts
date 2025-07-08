export class BasePage {
    visitToHomePage() {
        cy.visit("https://material.playwrightvn.com/");
    }

    navigateTo(pageName: string) {
        this.visitToHomePage();
        cy.xpath(`//a[contains(text(),'${pageName}')]`).click();
    }
}