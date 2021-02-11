describe ('MY First Test Suite',function()
{
    it('validating the checkboxes',function(){
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
        cy.get("#checkBoxOption1").uncheck();
        cy.get("input[type='checkbox']").check(['option2','option3']).should('be.checked')
        
        //static dropdown
        cy.get('select').select('option1').should('have.value','option1')

        //dynamic dropdown
        cy.get('#autocomplete').type('Ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text()==='India')
            {
                $el.click();

            }
        })
       // cy.get("displayed-text").type('sindhura')
        

    })


})