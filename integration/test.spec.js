// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://automationintesting.online/')
      cy.get('#name')
      .type('fake name')
      .should('have.value', 'fake name')

      cy.get('#email')
      .type('fake@mail.com')
      .should('have.value', 'fake@mail.com')

      cy.get('#phone')
      .type('081233465177')
      .should('have.value', '081233465177')

      cy.get('#subject')
      .type('book this room')
      .should('have.value', 'book this room')

      cy.get('#description')
      .type('I want to book this room blablablablabalbalabalbalablabala')
      .should('have.value', 'I want to book this room blablablablabalbalabalbalablabala')

      cy.get('#submitContact')
      .click()
     
    })
  })