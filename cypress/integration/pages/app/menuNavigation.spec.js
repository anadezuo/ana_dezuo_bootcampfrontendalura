/// <reference types="cypress" />

describe('/pages/sobre/', () => {
  it('ir até o menu home', () => {
    cy.visit('/');
    // cy.get('#nome-perfil').should('Ana Dezuó');
    // o que esperamos? ir para "/app/profile/"
    cy.url().should('include', '/');
  });

  it('ir até o menu projetos', () => {
    cy.visit('/projetos');

    // o que esperamos? ir para "/app/profile/"
    cy.url().should('include', '/projetos');
  });

  it('ir até o menu sobre', () => {
    cy.visit('/sobre/');

    // o que esperamos? ir para "/app/profile/"
    cy.url().should('include', '/sobre');
  });
});
