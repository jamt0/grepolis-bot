import config from '../support/config';

describe("Recolectar Recursos", () => {
  beforeEach(() => {
    cy.visit("https://es102.grepolis.com/"); // Deberia funcionar cualquier subdominio
  });

  it(`Recolectar Recursos cada ${config.TIEMPO_RECOLECCION / 60 / 1000} minutos`, function () {
    
    let numeroRecolecciones = 100;
    
    cy.iniciarSesion({user: config.USER, password: config.PASSWORD});

    cy.entrarAlMundo({world: config.WORLD});

    cy.entrarALaVistaPorIslas();

    while (numeroRecolecciones !== 0) {
      cy.entrarALaAldea({numeroAldea: config.NUMERO_ALDEA_INICIAL});

      cy.pedirRecursosALaAldea();

      for (let i = 0; i < config.NUMERO_ALDEAS; i++) {
        cy.irAnteriorAldea();
        cy.pedirRecursosALaAldea();
      }

      cy.cerrarVentanaDeLaAldea();

      cy.wait(config.TIEMPO_RECOLECCION);

      numeroRecolecciones--;
    }
  });
});
