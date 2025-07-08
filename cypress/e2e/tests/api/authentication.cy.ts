describe("Authentication", () => {
    const baseUrl = "https://conduit-api.bondaracademy.com";
    const fixture = "authentication/sign-in.json";

    it("Sign in", () => {
        cy.fixture(fixture).then((data) => {
            cy.request({
                method: "POST",
                url: `${baseUrl}/api/users/login`,
                body: data
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.user.email).to.eq(data.user.email);
                expect(response.body.user.username).to.eq(data.user.username);
            })
        })
    })
})
