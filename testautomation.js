/// <reference types="cypress" />
describe ('MY First Test Suite',function()
{
    before(function(){

        cy.fixture('example').then(function(data)
        {
               this.data=data
        })


    })

        it('Testing login credentials',function(){
            cy.visit("https://rahulshettyacademy.com/angularpractice/")
            cy.get(':nth-child(1) > .form-control').type(this.data.name)
        
            cy.get('#exampleCheck1').check().should('be.checked')
            cy.get('select').select(this.data.gender)
            cy.get('#inlineRadio1').check()
            cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
            cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
            cy.get('#inlineRadio3').should('be.disabled')
            cy.get(':nth-child(2) > .nav-link').click()
        
            cy.get(':nth-child(4) > .card > .card-footer > .btn').click()
            cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
            cy.get(':nth-child(1) > :nth-child(5) > .btn').click()
            cy.get(':nth-child(5) > .btn').click()
            cy.get('#country').type(this.data.country)
            cy.get('#checkbox2').click()
           // cy.contains('I agree with the').click({force:true})
            cy.get('.ng-pristine > .btn').click()

        

    })



})