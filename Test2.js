describe("Add to cart",function(){
    it('products to be added',function(){
         cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
         cy.get('.search-keyword').type('onion').click()
         cy.get('.search-keyword').should('have.length',1)
         //cy.get('.products').find('.product').contains('ADD TO CART').click()
         cy.get('div.container div.products-wrapper:nth-child(2) div.products div.product div.product-action > button:nth-child(1)').click()
         cy.get('.cart-icon > img').click()
         cy.contains('PROCEED TO CHECKOUT').click()
         cy.contains('Place Order').click()

         


    })
})