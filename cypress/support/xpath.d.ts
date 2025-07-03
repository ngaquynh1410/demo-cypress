// cypress/support/xpath.d.ts
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by XPath expression.
     * @example cy.xpath('//input[@id="rating"]').type('8')
     */
    xpath(selector: string, options?: Partial<Cypress.Loggable & Cypress.Timeoutable>): Chainable<JQuery<HTMLElement>>;
  }
}