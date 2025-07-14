import { RegisterPage } from "../../page/register.page";

describe('Material Playwright Page', () => {
  beforeEach(() => {
    cy.visit('https://material.playwrightvn.com/');
  });

  // it("Register page", () => {
  //   cy.xpath("//a[contains(text(),'Register Page')]").click();
  //   cy.xpath("//input[@id='username']").type("ngaquynh");
  //   cy.xpath("//input[@id='email']").type("nga@gmail.com");
  //   cy.xpath("//input[@id='female']").check();
  //   cy.xpath("//input[@id='traveling']").check();
  //   cy.xpath("//select[@id='interests']").select("technology");
  //   cy.xpath("//select[@id='country']").select("canada");
  //   cy.xpath("//input[@id='dob']").type("2001-10-14");
  //   cy.xpath("//input[@id='profile']").selectFile("data/test.txt");
  //   cy.xpath('//input[@id="rating"]').invoke('val', 8).trigger('input');

  //   // coordinate
  //   cy.xpath("//div[@id='starRating']").then(($star) => {
  //     const starWidth = $star.width();
  //     const starHeight = $star.height();

  //     const x = starWidth / 2;
  //     const y = starHeight / 2;

  //     cy.xpath("//div[@id='starRating']").trigger('click', { x: x, y: y });
  //   });
  // });

  it("Register page with POM", () => {
    let registerPage = new RegisterPage();
    registerPage.navigateToRegisterPage();
    debugger;
    registerPage.createNewInfo({
      usernane: "ngaquynh",
      email: "nga@gmail.com",
      gender: "female",
      hobbies: "traveling",
      interest: "technology",
      country: "canada",
      dob: "2001-10-14",
      filePath: "data/test.txt",
      rate: 8
    })
  })

  // it("Product page", () => {
  //   cy.xpath("//a[contains(text(),'Product page')]").click();
  //   for (let i = 1; i <= 3; i++) {
  //     for (let j = 0; j < 2; j++) {
  //       cy.xpath(`//button[@data-product-id='${i}']`).click();
  //     }
  //   }
  // });

  // it("To-do List", () => {
  //   cy.window().then((win) => {
  //     cy.stub(win, 'confirm');
  //   });

  //   cy.xpath("//a[contains(text(),'Todo page')]").click();
  //   for (let i = 1; i <= 5; i++) {
  //     cy.xpath("//input[@id='new-task']").type(`Todo ${i}`);
  //     cy.xpath("//button[@id='add-task']").click();
  //   }

  //   for (let i = 1; i <= 5; i++) {
  //     if (i % 2 !== 0) {
  //       cy.xpath(`//button[@id='todo-${i}-delete']`).click();
  //     }
  //   }
  // })
});
