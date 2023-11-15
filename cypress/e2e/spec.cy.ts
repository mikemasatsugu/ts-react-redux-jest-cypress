describe('template spec', () => {
  
  it('clicks the button and increments the value', () => {
    // cy.visit('http://localhost:8080');
    // const button = cy.contains('button', 'ADD 1');
    // const countDisplay = cy.contains('h1', 'Count: 0');
    // button.should('exist');
    // countDisplay.should('exist');
    // button.click();
    // countDisplay.should('have.text', 'Count: 1');

    cy.visit('http://localhost:8080');
    cy.contains('h1', 'Count: 0').should('exist');
    cy.contains('button', 'ADD 1').should('exist').click();
    cy.contains('h1', 'Count: 1').should('exist');
    cy.contains('button', 'ADD 1').should('exist').click();
    cy.contains('h1', 'Count: 2').should('exist');
  })
})