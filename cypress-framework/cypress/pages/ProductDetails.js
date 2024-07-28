class ProductDetails {
    visit(number) {
        cy.visit('/view_product/${number}');
    }

    getAddToCartButton() {
        return cy.get(`button[class$='cart']`)
    }
    getModalTitle() {
        return cy.get(`h4[class='modal-title w-100']`)
    }
    getContinueShoppingButton(){
        return cy.get('.modal-footer button')
    }


}

export default new ProductDetails();