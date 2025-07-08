import { BasePage } from "./base.page";

export class RegisterPage extends BasePage {
    getXpathWithInputField(fieldName: string) {
        return `//input[@id='${fieldName}']`;
    }
    xpathSelectInterests = "//select[@id='interests']";
    xpathSelectCountry = "//select[@id='country']";
    xpathBtnRegister = "//button[@type='submit']";

    constructor() {
        super();
    }

    navigateToRegisterPage() {
        this.navigateTo("Register Page");
    }

    createNewInfo(info: {
        usernane?: string,
        email?: string,
        gender?: "female" | "male",
        hobbies?: "reading" | "traveling" | "cooking",
        interest?: "technology" | "science" | "art" | "music" | "sport",
        country?: "usa" | "canada" | "uk" | "australia",
        dob?: string,
        filePath?: string,
        bio?: string,
        rate?: number,
        favoriteColor?: string,
        newsletter?: boolean,
        enableFeature?: boolean,
    }) {
        cy.xpath(this.getXpathWithInputField("username")).type(info.usernane);
        cy.xpath(this.getXpathWithInputField("email")).type(info.email);
        cy.xpath(this.getXpathWithInputField(info.gender)).check();
        cy.xpath(this.getXpathWithInputField(info.hobbies)).check();
        cy.xpath(this.xpathSelectInterests).select(info.interest);
        cy.xpath(this.xpathSelectCountry).select(info.country);
        cy.xpath(this.getXpathWithInputField("dob")).type(info.dob);
        cy.xpath(this.getXpathWithInputField("profile")).selectFile(info.filePath);
        cy.xpath(this.getXpathWithInputField("rating")).invoke("val", info.rate).trigger("input");
        cy.xpath(this.xpathBtnRegister).click();
    }
}