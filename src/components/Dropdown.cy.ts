/// <reference types="cypress" />

describe('Integration', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should change dropdown title and icon state when user selects dropdown option', () => {
    /* Should display dropdown component */
    cy.get('[data-testid="dropdown"]').as('dropdown').should('be.visible');
    cy.get('.dropdown-button-label').as('label').should('be.visible');
    cy.get('.icon').as('icon').should('be.visible');
    cy.get('@icon').contains('+');
    cy.get('.dropdown-menu-container').should('not.exist');

    /* Should open dropdown menu and display items */
    cy.get('@dropdown').click();
    cy.get('.dropdown-menu-container').as('menu').should('be.visible');
    cy.get('.dropdown-menu-item').as('items').should('have.length', 4);
    cy.get('@icon').contains('-');

    /* Should select item */
    cy.get('.dropdown-checkbox').as('checkbox').first().click();
    cy.get('@label').should('have.text', 'Option1 (1)');

    /* Should close dropdown menu */
    cy.get('@dropdown').click();
    cy.get('@menu').should('not.exist');
    cy.get('@icon').contains('x');
  });
});

export {};
