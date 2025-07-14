describe('Iframe Test', () => {
    it('Verify h1 in iframe is visible and has correct text', () => {
        // Truy cập trang web
        cy.visit('https://material.playwrightvn.com/01-xpath-register-page.html');

        // Đảm bảo iframe tồn tại và hiển thị
        cy.get('iframe[title="Example Iframe"]')
            .should('be.visible');
        cy.wait(3000);
        cy.get('iframe[src="https://www.example.com"]')
            .its('0.contentDocument.body')
            .should("be.visible")
            .then(cy.wrap)
            .find('h1')
            .should('be.visible')
            .and('have.text', 'Example Domain');
    });

    it("Demo", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.get("#mce_0_ifr")
        .its("0.contentDocument.body")
        .should("be.visible")
        .find("p")
        .should("be.visible")
        .and('have.text', 'Your content goes here.')
    })
});
