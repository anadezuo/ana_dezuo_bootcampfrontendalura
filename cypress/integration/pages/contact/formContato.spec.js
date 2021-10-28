import ContactFormScreenPageObject from '../../../../src/components/patterns/FormContato/ContactFormScreen.pageObject';

describe('/contato', () => {
  describe('when click contact button, modal should been opened', () => {
    it('should display a success message after sending the data', () => {
      cy.intercept('POST', 'https://contact-form-api-jamstack.herokuapp.com/message').as('contact');
      const contactScreen = new ContactFormScreenPageObject(cy);

      const data = {
        name: 'Ana',
        email: 'ana@teste.com',
        message: 'Gostei muito dos seus projetos!',
      };

      contactScreen
        .callModalForm()
        .fillContactForm(data)
        .submitForm();

      cy.wait('@contact')
        .then((intercept) => {
          console.log(intercept);
        });
      contactScreen
        .successForm()
        .closeForm();
    });
  });
});
