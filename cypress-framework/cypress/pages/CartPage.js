class CartPage {
    visit() {
        cy.visit('/view_cart');
    }

    getCartItem(number) {
        cy.get(`tr[id='product-${number}']`);
    }

    deleteCartItem() {
        return cy.get('.cart_quantity_delete');
    }

    getCountOfItems() {
        return cy.get('tbody tr').its('length');
    }

    getText() {
        return cy.get('b');
    }
}

export default new CartPage();