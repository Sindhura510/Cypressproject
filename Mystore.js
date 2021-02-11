describe ('MY First Test Suite',function()
{
    before(function(){

        cy.fixture('example').then(function(data)
        {
               this.data=data
        })


    })

        it('Validating the Search box',function(){

            cy.visit('http://automationpractice.com/index.php')
            cy.get('#search_query_top').type(this.data.Product)
            
            cy.get('#searchbox > .btn').click()
            cy.get(':nth-child(1) > .product-container > .right-block > h5 > .product-name').click().should('have.length','1')


    })
          it('Validating the AddTO Cart button',function(){
            cy.get('#quantity_wanted').type('2')

          })

})