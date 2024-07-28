class ProductsPage {
  visit() {
    cy.visit('/products');
  }

  getPageTitle() {
    return cy.get('.title');
  }

  getSearchInput() {
    return cy.get('#search_product');
  }

  getSearchButton() {
    return cy.get('#submit_search');
  }

  getSearchResults() {
    return cy.get('.features_items');
  }

  getFirstProduct() {
    return cy.get('.features_items .product-image-wrapper').first();
  }

  getFirstViewProduct() {
      return cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a');
  }

  getModalContent() {
    return cy.get('div[class="modal-content"] p');
  }

  getContinueShoppingButton() {
    return cy.get('.modal-footer button').contains('Continue Shopping');
  }
}

export default new ProductsPage();