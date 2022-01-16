declare global {
  namespace Cypress {

    type TUserData = {user: string, password: string};
    type TWorldData = {world: string};
    type TAldeaData = {numeroAldea: number};
    
    interface Chainable {
      entrarALaAldea(aldeaData: TAldeaData): void;
      entrarALaVistaPorIslas(): void;
      iniciarSesion(userData: TUserData): void;
      entrarAlMundo(worldData: TWorldData): void;
      pedirRecursosALaAldea(): void;
      irAnteriorAldea(): void;
      cerrarVentanaDeLaAldea(): void;
    }
  }
}

Cypress.Commands.add("iniciarSesion", (userData: Cypress.TUserData) => {
  cy.intercept("POST", "/glps/login_check").as("login_check");
  cy.get("#login_userid").type(userData.user);
  cy.get("#login_password").type(userData.password);
  cy.get("#login_Login").click();
  cy.wait("@login_check");
});

Cypress.Commands.add("entrarAlMundo", (worldData: Cypress.TWorldData) => {
  cy.intercept("POST", "/start/index?action=fetch_news").as("fetch_news");
  cy.wait("@fetch_news");
  cy.contains(worldData.world).click();
});

Cypress.Commands.add("entrarALaVistaPorIslas", () => {
  cy.wait(5000);
  cy.get('div[name="island_view"]').click();
});

Cypress.Commands.add("entrarALaAldea", (aldeaData: Cypress.TAldeaData) => {
  cy.wait(2000);
  cy.get(`#farm_town_${aldeaData.numeroAldea}`).click({ force: true });
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
