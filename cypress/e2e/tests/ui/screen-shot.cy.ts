describe("Screenshot & Vid", () => {
    it("Capture screenshot & Vid", () => {
        cy.visit("https://playwrightvn.com/");
        // screenshot fullpage
        cy.screenshot("homepage");
        cy.wait(5000);
        // screenshot 1 phan
        cy.xpath("//h1[@class='blog-title']").screenshot("heading");
    })

    it("Automatically capture screenshot & vide on failure - only when ou execute through CLI", () => {
        cy.visit("https://playwrightvn.com/");
        cy.xpath("//h1[@class='blog-title']").should("have.text", "AAA");

        // Automatically capture screenshot & vide on failure - only when ou execute through CLI
    })
})