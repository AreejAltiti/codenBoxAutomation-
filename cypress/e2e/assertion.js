describe('my first test suite', () => {
    it('visit coden box automation site', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.url().should('include','codenbox')
    });

it('should check the correct element on the page', () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.get('.page-title').should('be.visible')
});

it('should assertion with length property example', () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.get('.search-input').should('have.length',2)
    
});


it('should assertion with text of an element', () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.get('#openwindow').should('have.text','Open Window')

})
it('should check for option2', () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.get('#checkBoxOption2').check().should('be.checked')

})
it('should select for API from dropdown', () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.get('#dropdown-class-example').select('API').should('have.value','option3')

})

it('Chining assertion example', () => {
    cy.visit("https://codenboxautomationlab.com/practice/")
    cy.get('.page-title').should('be.visible').and('contain','Automation Practice')
});




});