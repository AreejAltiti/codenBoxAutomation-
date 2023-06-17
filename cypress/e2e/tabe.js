describe('Handle tabs', () => {
    it.skip('Approach1', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")//parent tab
        cy.get("#opentab").invoke('removeAttr','target').click()//clicking on tab
        cy.url().should('include','http://www.codenbox.com/')
        cy.wait(5000)
        cy.go('back')//back to parent tab


    })



    it('Approach2', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")//parent tab
        cy.get("#opentab").then((e)=>{
        let url=e.prop('href');
           cy.visit(url)

        })
        cy.url().should('include','http://www.codenbox.com/')
        cy.wait(5000)
        cy.go('back')//back to parent tab



})

})