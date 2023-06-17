describe('Check UI Elements', () => {



    it.skip('Checking radio buttons', () => {
    cy.visit("https://codenboxautomationlab.com/practice/")

    //visibilty

    cy.get("input[value='radio1']").should("be.visible")
    cy.get("input[value='radio2']").should("be.visible")
    cy.get("input[value='radio3']").should("be.visible")

    //select radio button

cy.get("input[value='radio1']").check().should("be.checked")
cy.get("input[value='radio2']").should('not.be.checked')
cy.get("input[value='radio3']").should('not.be.checked')


})



it('checking check boxes', () => {

    cy.visit("https://codenboxautomationlab.com/practice/")


    //visiblity of element
    cy.get('input#checkBoxOption1').should('be.visible')
    
    //selecting single check box
     cy.get('input#checkBoxOption1').check().should("be.checked")
     cy.get('input#checkBoxOption2').uncheck().should('not.be.checked')
//selecting all check boxes
cy.get('input[type="checkbox"]').check().should('be.checked')
cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
//select first checkbox
cy.get('input[type="checkbox"]').first().check().should('be.checked')
cy.get('input[type="checkbox"]').last().check().should('be.checked')
})

})