describe('handle dropdown', () => {
    it.skip('dropdown with select ', () => {
        
       cy.visit('https://codenboxautomationlab.com/practice/')

    cy.get('#dropdown-class-example')
    .select('Selenium')
    .should('have.value','option1')



    });
it('Dynamic dropdown ', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
     
    cy.get('#autocomplete').type('arab')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'Saudi Arabia') {
      
          cy.wrap($el).click()
        } 
      })
});

});