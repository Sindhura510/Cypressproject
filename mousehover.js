describe ('MY First Test Suite',function()
{
    it('validating the mouseover methods',function(){
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

    })
})