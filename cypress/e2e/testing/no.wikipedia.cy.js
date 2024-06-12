describe("Login form", () => {
  it("can login with the login form with valid credentials", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("button")
      .filter(":visible")
      .contains("Login")
      .click({ force: true }, { delay: 500 })
      .click({ force: true }, { delay: 500 })
      .click({ force: true }, { delay: 500 });
    cy.get("#loginEmail").type("niklas.ferling@stud.noroff.no");
    cy.get("input[name=password]").filter(":visible").type("Ohwyhee17@");
  });
});
