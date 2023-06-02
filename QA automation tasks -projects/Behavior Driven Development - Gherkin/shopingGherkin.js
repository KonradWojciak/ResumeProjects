// Task included only Gherkin.feature file
//This file was maked es something extra
// selectors me be empty or not correct

import { Given } from "@cucumber/cucumber";

Given("I m logged in to shop", () => {
  cy.visit("https://www2.hm.com/en_gb/index.html");
  cy.login("username", "password");
});
And(`I navigate to "<main menu>"`, () => {
  cy.get(" ").click();
});

When(`I get in to "<Men>" bar in "<main menu>"`, () => {
  cy.get(" ").click();
});
Then *
  (`I choose "<socks>" in the "<Men>" bar`,
  () => {
    cy.get(" ").click();
  });

When(`I m on "<MENS SOCKS>" tabel`, () => {
  cy.url().should("eq", "https://example.com/expected-url");
});

And(`I choose "DryMove™ Sports socks"`, () => {
  cy.get(" ").click();
});

When(`I get in to details of product on "DryMove™ Sports socks" cart`, () => {
  cy.get(" ").click();
});
And(`I choose collor  "black"`, () => {
  cy.get(" ").click();
});
And(`I select size "6,5-8"`, () => {
  cy.get(" ").click();
});
Then(`I click "<Add>" button`, () => {
  cy.get(" ").click();
});
When(`"Shopping bag" include 1 product`, () => {
  cy.get(".shoppingBag-icon").should("have.attr", "shoppingBag-icon", "1");
});
Then(`I go to "Shopping bag" cart`, () => {
  cy.get(" ").click();
});
When(`I am on "Shopping bag" cart`, () => {
  cy.url().should("eq", "https://example.com/expected-url");
});
And(`I have one product in Shopping bag`, () => {
  cy.get(".product-quantity").invoke("val").should("equal", "3");
});
And(`the name of product is "DryMove™ Sports socks"`, () => {
  cy.get(".product-name")
    .invoke("text")
    .should("equal", "DryMove™ Sports socks");
});
And('the collor is "black"', () => {
  cy.get(".product-collor").invoke("text").should("equal", "black");
});
And(`the size is  "6,5-8"`, () => {
  cy.get(".product-size").invoke("text").should("equal", "6,5-8");
});
Then(` I check price "value"`, () => {
  cy.get(".product-collor").invoke("text").should("equal", "6,5-8");
});
When(`price "value" is correct`, () => {
  cy.get(".product-collor").invoke("text").should("equal", "6,5-8");
});
Then(`I chose the method of pay`, () => {
  cy.get(" ").click();
});
