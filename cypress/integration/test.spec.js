var landingPage = require("../pages/landingPage");
describe("Validate PHP travels website",()=>{
    it("Navigate to the travels page",()=>{
        cy.visit("https://www.phptravels.net/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    });
    it("Select the destination details",()=>{
        cy.get('[id="s2id_autogen16"] input').eq(0)
        .click({force: true})
        .type("Chicago")
        cy.get('.select2-results-dept-1 > .select2-result-label')
        .click()
        cy.get('#checkin')
        .clear()
        .type("11/01/2020")
        cy.get('#checkout')
        .clear()
        .type("11/05/2020")
        cy.get('.bootstrap-touchspin-up').eq(0)
        .click()
        cy.get('.bootstrap-touchspin-up').eq(1)
        .click()
        cy.get('[type="submit"]').eq(0)
        .click()
    });
    it("Validate No Results Found message",()=>{
        cy.get('[class="product-long-item-wrapper"] h2')
        .should('have.text', 'No Results Found')
    });
    it("Select Airport Transport, Guest House, priceOrderDes checkboxes",()=>{
        cy.get('#priceOrderDes').check({force: true})
        cy.get('[for="Airport Transport"]').click()
        cy.get('[for="Guest House"]').click()
        cy.get('#searchform')
        .click();
    });
    it("Select Airport Transport",()=>{
        cy.get('[id="Airport Transport"]')
        .should('be.checked')
        cy.get('[id="Guest House"]')
        .should('be.checked')
        cy.get('[id="priceOrderDes"]')
        .should('be.checked')
    });
    it("Login in using incorrect credentials ",()=>{
        cy.get('[id="dropdownCurrency"]').eq(1)
        .click()
        cy.contains('Login').click()
        cy.get('input[type="email"]').eq(0).type("user@phptravels.com",{force: true});
        cy.get('input[type="password"]').eq(0).type("demouser1234",{force: true})
        cy.get('#loginfrm > .btn-primary').click()
        cy.get('.alert') .should('have.text', 'Invalid Email or Password')
    });
    it("Login in using correct credentials ",()=>{
        cy.get('input[type="email"]').eq(0)
        .clear()
        .type("user@phptravels.com");
        cy.get('input[type="password"]').eq(0)
        .clear()
        .type("demouser")
        cy.get('#loginfrm > .btn-primary').click()
        cy.get('.text-align-left').should('contain.text', 'Demo User')
    });
})  