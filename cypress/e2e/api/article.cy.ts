describe("Get list articles", () => {
    const baseUrl = "https://conduit-api.bondaracademy.com";
    const fixture = "authentication/sign-in.json";
    let token: string;
    
    beforeEach(() => {
        cy.fixture(fixture).then((data) => {
            cy.request({
                method: "POST",
                url: `${baseUrl}/api/users/login`,
                body: data
            }).then((response) => {
                token = response.body.user.token;
            })
        })
    })

    it("Get list articles", () => {
        cy.request({
            method: "GET",
            url: `${baseUrl}/api/articles?limit=10&offset=0`,
            headers: {
                Authorization: `Token ${token}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    })

    it("Create article", () => {
        cy.fixture("authentication/create.json").then((data) => {
            cy.request({
                method: "POST",
                url: `${baseUrl}/api/articles`,
                headers: {
                    Authorization: `Token ${token}`
                },
                body: data
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.article.title).to.eq(data.article.title);
                expect(response.body.article.description).to.eq(data.article.description);
                expect(response.body.article.body).to.eq(data.article.body);
                expect(response.body.article.tagList).to.deep.eq(data.article.tagList)

                cy.request({
                    method: "DELETE",
                    url: `${baseUrl}/api/articles/${response.body.article.slug}`,
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
            })
        })
    })
})