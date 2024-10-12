/// <reference types="cypress" />

describe("Pizza App", () => {
  it("Goes to order page and orders pizza successfully", () => {
    cy.visit("http://localhost:5173/");
    cy.intercept("POST", "https://reqres.in/api/pizza").as("getFood");
    cy.get('[cy-test="banner-button"]').click();
    cy.location("href").should("contain", "order");
    cy.contains("Lütfen boyut seçiniz.").should("exist");
    cy.contains("Lütfen hamur türü seçiniz.").should("exist");
    cy.get('[cy-test="small"]').click();
    cy.get("select").select("Kalın");
    cy.contains("Lütfen boyut seçiniz.").should("not.exist");
    cy.contains("Lütfen hamur türü seçiniz.").should("not.exist");
    cy.contains("Biber").click();
    cy.contains("Kabak").click();
    cy.contains("Ananas").click();
    cy.contains("Soğan").click();
    cy.contains("Peperonni").click();
    cy.contains("Sosis").click();
    cy.contains("Domates").click();
    cy.contains("Sucuk").click();
    cy.contains("Sarımsak").click();
    cy.contains("Mısır").click();

    cy.contains("Sipariş Ver").click();
    cy.location("href").should("contain", "success");

    cy.wait("@getFood").then((interception) => {
      expect(interception.response.statusCode).to.eq(201);

      const responseBody = interception.response.body;
      console.log(responseBody);

      expect(responseBody).to.have.property("form");
      expect(responseBody).to.have.property("pizzaNum");
      expect(responseBody).to.have.property("toppingCost");
      expect(responseBody).to.have.property("totalCost");
    });
  });

  it("It redirects to home page if you try to access success page without submitting the form", () => {
    cy.visit("http://localhost:5173/success");
    cy.location("href").should("not.contain", "/success");
  });

  it("It disables order button if dough is not selected", () => {
    cy.visit("http://localhost:5173/order");
    cy.get('[cy-test="small"]').click();
    cy.contains("Sipariş Ver").should("be.disabled");
  });

  it("It disables order button if size is not selected", () => {
    cy.visit("http://localhost:5173/order");
    cy.get("select").select("İnce");
    cy.contains("Sipariş Ver").should("be.disabled");
  });

  it("It should disable remaining checkboxes if 10 of them are selected", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[type="checkbox"]:not(:checked)').each(($checkbox) => {
      cy.get(`label[for="${$checkbox.attr("id")}"]`).then(($label) => {
        $label.click();
        cy.wrap($label).should("be.visible");
      });
    });

    cy.get('input[type="checkbox"]:not(:checked)')
      .its("length")
      .should("eq", 3);

    cy.get('[cy-test="small"]').click();
    cy.get("select").select("Kalın");
    cy.contains("Lütfen boyut seçiniz.").should("not.exist");
    cy.contains("Lütfen hamur türü seçiniz.").should("not.exist");
    cy.contains("En fazla 10 malzeme seçebilirsiniz.").should("exist");
  });
});
