describe('Category page tests', () => {

    it.only('Category page - verify if all filter checkboxes can be checked and unchecked', () => {

      //Click first category from menu on main page
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.sf-with-ul').first().click()

      //Verify if User was redirected to the new page
      cy.url().should('include', 'controller=category');

      //Get all filters checkkoxes.
      //Check all checkboxes. 
      //Get parent of each checkbox. 
      //Verify if parent of each checkbox has class 'checked' which is added when element is checked.
      cy.get('.checkbox').check().parent().should('have.class', 'checked')


      //Get all filters checkkoxes.
      //Uncheck all checkboxes. 
      //Get parent of each checkbox. 
      //Verify if parent of each checkbox doesn't have class 'checked' which is removed when element is unchecked.
      cy.get('.checkbox').uncheck().parent().should('not.have.class', 
     'checked')

    })

  })