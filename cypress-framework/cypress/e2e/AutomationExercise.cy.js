import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import ProductDetails from '../pages/ProductDetails';


describe('Automation Exercise Website Tests', () => {
  it('verifies the homepage title', () => {
    HomePage.visit();
    HomePage.getTitle().should('have.text', 'AutomationExercise');
  });

  it('navigates to the products page', () => {
    HomePage.visit();
    HomePage.getProductsLink().click();
    ProductsPage.getPageTitle().should('contain', 'All Products');
  });

  it('performs a product search', () => {
    ProductsPage.visit();
    ProductsPage.getSearchInput().type('dress');
    ProductsPage.getSearchButton().click();
    ProductsPage.getSearchResults().should('contain', 'Searched Products');
  });

  it('add and delete a product from cart', () => {
    ProductsPage.visit();
    ProductsPage.getFirstViewProduct().click();
    ProductDetails.getAddToCartButton().should('contain', 'Add to cart');
    ProductDetails.getAddToCartButton().click();
    ProductDetails.getModalTitle().should('contain', 'Added!')
    ProductDetails.getContinueShoppingButton().should('contain', 'Continue Shopping');
    ProductDetails.getContinueShoppingButton().click();
    CartPage.visit();
    let itemCount = CartPage.getCountOfItems();
    if(itemCount.should("equal", 1))
    {
      CartPage.deleteCartItem().click();
      CartPage.getText().should("contain.text", "Cart is empty!");
    }
    else
      console.log("No items in the cart. Nothing to delete")
  });

  it('subscribes to the newsletter', () => {
    HomePage.visit();
    cy.scrollTo('bottom');
    HomePage.getSubscribeEmailInput().type('test@example.com');
    HomePage.getSubscribeButton().click();
    HomePage.getSubscriptionAlert().should('be.visible').and('contain', 'You have been successfully subscribed!');
  });
})
// describe('Automation Exercise Website Tests', () => {
//   beforeEach(() => {
//     cy.visit('/');
//   });
//
//   it('verifies the homepage title', () => {
//     cy.get('.active > :nth-child(1) > h1').should('have.text', 'AutomationExercise');
//   });
//
//   it('navigates to the products page', () => {
//     cy.get('a[href="/products"]').click();
//     cy.url().should('include', '/products');
//     cy.get('.title').should('contain', 'All Products');
//   });
//
//   it('performs a product search', () => {
//     cy.get('a[href="/products"]').click();
//     cy.get('#search_product').type('dress');
//     cy.get('#submit_search').click();
//     cy.get('.features_items').should('contain', 'Searched Products');
//   });
//
//   it('add and delete a product from cart', () => {
//     cy.get('a[href="/products"]').click();
//     cy.url().should('include', '/products');
//     cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
//
//     cy.get(`button[class$='cart']`).should("contain.text", "Add to cart");
//     cy.get(':nth-child(5) > .btn').click();
//
//     cy.get(`h4[class='modal-title w-100']`).should('contain', 'Added!');
//     cy.get('.modal-footer button').contains('Continue Shopping').click();
//     cy.get(`a[href='/view_cart']`).first().click();
//     cy.url().should('include', '/view_cart');
//     cy.get('.cart_quantity_delete').click()
//     cy.get(`b`).should("contain.text", "Cart is empty!");
//   });
//   it('subscribes to the newsletter', () => {
//     cy.scrollTo('bottom');
//     cy.get('#susbscribe_email').type('test@example.com');
//     cy.get('#subscribe').click();
//     cy.get('.alert-success').should('be.visible').and('contain', 'You have been successfully subscribed!');
//   });
// });
