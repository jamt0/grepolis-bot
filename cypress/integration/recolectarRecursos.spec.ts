describe("Recolectar cada 5 minutos.", () => {
  beforeEach(() => {
    cy.visit("https://es102.grepolis.com/");
  });

  it("Recolectar Recursos cada 10 minutos", function () {
    cy.iniciarSesion();

    cy.entrarAlMundo();

    cy.entrarALaVistaPorIslas();

    let contador = 100;

    while (contador !== 0) {
      cy.entrarALaAldea();

      cy.pedirRecursosALaAldea();

      //Pedir recursos para 5 aldeas
      for (let i = 0; i < 5; i++) {
        cy.irAnteriorAldea();
        cy.pedirRecursosALaAldea();
      }

      cy.cerrarVentanaDeLaAldea();

      //esperar 10 minutos
      cy.wait(600000);

      contador--;
    }
  });
});
