describe('Basic Log In', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Log In').click()
    
  })
})