export default class ContactFormScreenPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/sobre');
  }

  callModalForm() {
    this.cy.get('#contact-button').click().invoke('show');
    return this;
  }

  fillContactForm({ name, email, message }) {
    this.cy.get('#formContact input[name=name]').type(name);
    this.cy.get('#formContact input[name=email]').type(email);
    this.cy.get('#formContact input[name=message]').type(message);
    return this;
  }

  submitForm() {
    this.cy.get('#formContact button[type="submit"]').click();
    return this;
  }

  successForm() {
    cy.contains('sua mensagem foi enviada com sucesso');
    return this;
  }

  closeForm() {
    this.cy.get('[alt="Imagem em x que fecha a tela"]').click();
    return this;
  }
}
