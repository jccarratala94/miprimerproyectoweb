describe('Pruebas del formulario de contacto', () => {
    it('Debería completar y enviar el formulario correctamente', () => {
      cy.visit('http://127.0.0.1:5500/templates/index.html'); // Cambia según tu ruta
  
      // Completar campos
      cy.get('#nombre').type('Juan Cruz');
      cy.get('#email').type('juancruz@example.com');
      cy.get('#mensaje').type('Hola, esta es una prueba con Cypress.');
  
      // Enviar el formulario
      cy.get('#enviar').click();
  
      // Verificar mensaje de éxito
      cy.get('#mensaje-exito').should('be.visible').and('contain', '¡Gracias por tu mensaje!');
  
      // Verificar que los campos están vacíos
      cy.get('#nombre').should('have.value', '');
      cy.get('#email').should('have.value', '');
      cy.get('#mensaje').should('have.value', '');
    });
  });
  