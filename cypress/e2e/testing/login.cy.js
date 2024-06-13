describe("Login form", () => {
  it("can login with the login form with valid credentials", () => {
    cy.visit("/index.html");
    cy.get("button")
      .filter(":visible")
      .contains("Login")
      .click({ force: true });
    cy.get("#loginEmail").type("niklas.ferling@stud.noroff.no");
    cy.get("input[name=password]").filter(":visible").type("Ohwyhee17@");
    cy.get("button[type=submit]")
      .filter(":visible")
      .contains("Login")
      .click({ force: true });
    cy.get("button").contains("Logout").should("be.visible");
  });
  it("cannot login with the login form with invalid credentials and shows message", () => {
    cy.visit("/index.html");
    cy.get("button")
      .filter(":visible")
      .contains("Login")
      .click({ force: true });
    cy.get("#loginEmail").filter(":visible").type("wrongEmail@noroff.no");
    cy.get("#loginPassword").filter(":visible").type("wrongPassword");
    cy.get("button[type=submit]")
      .filter(":visible")
      .contains("Login")
      .click({ force: true });
    cy.get("window:alert").should("be.visible");
  });
  it("Can log out with the log out button", () => {
    cy.visit("/index.html");
    cy.get("button[type=reset]").filter(":visible").click({ force: true });
    cy.get("button")
      .filter(":visible")
      .contains("Logout")
      .click({ force: true });
    cy.get("button").contains("Login").should("be.visible");
  });
});
