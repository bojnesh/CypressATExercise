class HomePage {
  visit() {
    cy.visit('/');
  }

  getTitle() {
    return cy.get('.active > :nth-child(1) > h1');
  }

  getProductsLink() {
    return cy.get('a[href="/products"]');
  }

  getSubscribeEmailInput() {
    return cy.get('#susbscribe_email');
  }

  getSubscribeButton() {
    return cy.get('#subscribe');
  }

  getSubscriptionAlert() {
    return cy.get('.alert-success');
  }
}

export default new HomePage();