
describe("Recolectar Recursos", () => {
  
  it(`Recolectar Recursos cada ${Cypress.env('TIEMPO_RECOLECCION') / 60 / 1000} minutos`, function () {
    cy.visit({url:"/", timeout: 30000}); // Deberia funcionar cualquier subdominio
    
    let numeroRecolecciones = 100000;
    
    cy.iniciarSesion({user: Cypress.env('USER'), password: Cypress.env('PASSWORD')});

    cy.entrarAlMundo({world: Cypress.env('WORLD')});

    cy.entrarALaVistaPorIslas();

    while (numeroRecolecciones !== 0) {
      cy.entrarALaAldea({numeroAldea: Cypress.env('NUMERO_ALDEA_INICIAL')});

      cy.pedirRecursosALaAldea();

      for (let i = 0; i < Cypress.env('NUMERO_ALDEAS'); i++) {
        cy.irAnteriorAldea();
        cy.pedirRecursosALaAldea();

        cy.get("body").then($body => {
          if ($body.find('.btn_confirm').length > 0) {   
            cy.get('.btn_confirm').click({ force: true });
          }
      });
      }

      cy.cerrarVentanaDeLaAldea();

      cy.wait( Cypress.env('TIEMPO_RECOLECCION'));

      numeroRecolecciones--;
    }
  });
});
