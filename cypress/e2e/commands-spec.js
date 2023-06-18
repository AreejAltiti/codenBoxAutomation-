describe('command', () => {
    it('should login to the application using custom command ', () => {
        cy.visit("https://codenboxautomationlab.com/wp-login.php")
        cy.login('areej','12345')
        cy.get('#login_error').should('contain','Error')
    });
});