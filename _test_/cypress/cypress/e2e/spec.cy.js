describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it('should assert teks "Edit src/App.js and save to reload."', () => {
    cy.contains("Edit src/App.jsx and save to test HMR");
  });

  it("should count correctly", () => {
    cy.contains("count is 0").click();
    cy.contains("count is 1").click();
    cy.contains("count is 2").click();
    cy.contains("count is 3");
  });
});
