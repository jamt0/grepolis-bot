describe("Recolectar Recursos", () => {
  before(function () {
    cy.fixture("datos").then(function (datos) {
      this.datos = datos;
    });
  });

  it("Recolectar Recursos", function () {
    cy.visit({ url: "/", timeout: 30000 });

    let numeroRecolecciones = 1000;

    let contadorCiudades = 0;

    cy.iniciarSesion({
      user: this.datos.usuario,
      password: this.datos.contrasena,
    });

    cy.entrarAlMundo({ world: this.datos.mundo });

    cy.entrarALaVistaPorIslas();

    const listaCiudades = this.datos.ciudadesConAldeas;

    while (numeroRecolecciones !== 0) {
      while (contadorCiudades !== listaCiudades.length) {
        cy.cambiarCiudad({
          codigoCiudad: listaCiudades[contadorCiudades].codigoCiudad,
        });

        cy.entrarALaAldea({
          numeroAldea: listaCiudades[contadorCiudades].aldeaInicial,
        });

        cy.pedirRecursosALaAldea();

        for (let i = 0; i < this.datos.numeroAldeas; i++) {
          cy.irAnteriorAldea();
          cy.pedirRecursosALaAldea();
        }

        cy.cerrarVentanaDeLaAldea();

        contadorCiudades++;
      }

      cy.wait(this.datos.tiempoRecoleccion);

      numeroRecolecciones--;
      contadorCiudades = 0;
    }
  });
});
