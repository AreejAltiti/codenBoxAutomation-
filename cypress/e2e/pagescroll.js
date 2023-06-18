describe('scroll', () => {
    it('scroll the page up and down', () => {
        cy.visit('https://codenboxautomationlab.com/')
        cy.wait(3000)
        cy.contains('Contact Us').scrollIntoView()
        cy.wait(3000)
        cy.get('.has-vivid-cyan-blue-color > span > strong').scrollIntoView()

    });
});