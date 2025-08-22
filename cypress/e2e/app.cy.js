// app.spec.js created with Cypress
//
describe('The app', () => {
    it('shows the correct name', () => {
        cy.visit('')
        cy.get('h1')
        .should('have.text', 'Marius Ising')
    })
  })
