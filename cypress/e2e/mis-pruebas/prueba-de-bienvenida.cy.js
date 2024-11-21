
describe('Prueba del botón y alerta', () => {
  it('Debería hacer clic en el botón y mostrar un mensaje de alerta', () => {
    cy.visit('http://127.0.0.1:5500/index.html'); // Visita la URL de tu página
   // Selecciona el botón por su texto y hace clic
    cy.contains('button', 'Toca acá').click();
    // Intercepta el mensaje de alerta y verifica el contenido
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Aguante Boca Boca Boca y JRR'); // Verifica el texto del alerta
    });
  });
});


  
  