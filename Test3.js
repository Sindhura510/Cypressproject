describe ('MY First Test Suite',function()
{
    it('MY First Test Suite',function(){
    
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(5000)
        cy.get('.product:visible').should('have.length', 4)
        
        // parent child
        cy.get('.products').find('.product:visible').should('have.length',4)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {
           
            const textveg=$el.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
            $el.find('button').click()
        
            }

          cy.get('.brand').then(function(logoelement){
                cy.log(logoelement.text())

            })
            const logo=cy.get('.brand')
            //cy.get('.cart-icon > img').click()
          // cy.contains('PROCEED TO CHECKOUT').click()
           // cy.contains('Place Order').click()
            })


        
   })
})


   



