declare global {
  namespace Cypress {
    interface Chainable {
      entrarALaAldea(): void;
      entrarALaVistaPorIslas(): void;
      iniciarSesion(): void;
      entrarAlMundo(): void;
      pedirRecursosALaAldea(): void;
      irAnteriorAldea(): void;
      cerrarVentanaDeLaAldea(): void;
    }
  }
}

Cypress.Commands.add("iniciarSesion", () => {
  cy.intercept("POST", "/glps/login_check").as("login_check");
  cy.get("#login_userid").type("jam0");
  cy.get("#login_password").type("buxi022899");
  cy.get("#login_Login").click();
  cy.wait("@login_check");
});

Cypress.Commands.add("entrarAlMundo", () => {
  cy.intercept("POST", "/start/index?action=fetch_news").as("fetch_news");
  cy.wait("@fetch_news");
  cy.contains("DÍON").click();
});

Cypress.Commands.add("entrarALaVistaPorIslas", () => {
  cy.wait(5000);
  cy.get('div[name="island_view"]').click();
});

Cypress.Commands.add("entrarALaAldea", () => {
  cy.wait(2000);
  cy.get("#farm_town_216").click({ force: true });
});

Cypress.Commands.add("pedirRecursosALaAldea", () => {
  cy.wait(1000);
  cy.get(
    ":nth-child(1) > .card_click_area > .btn_claim_resources > .caption"
  ).click({ force: true });
});

Cypress.Commands.add("irAnteriorAldea", () => {
  cy.wait(1000);
  cy.get(".village_info div:first").click();
});

Cypress.Commands.add("cerrarVentanaDeLaAldea", () => {
  cy.wait(1000);
  cy.get(".buttons_container > .close").click({ multiple: true, force: true });
});

export {};
