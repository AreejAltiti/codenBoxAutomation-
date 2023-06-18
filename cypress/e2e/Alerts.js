describe('alert', () => {


    it('verify alert window', () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
         cy.get('#alertbtn').click()
         cy.on('window:alert',(str)=>{

          expect(str).to.equal("Hello , share this practice page who love to learn automation")


         })
 })

         it('verify confirm window', () => {
            cy.visit("https://codenboxautomationlab.com/practice/")
             cy.get('#confirmbtn').click()
             cy.on('window:confirm',(str)=>{
    
              expect(str).to.equal("Hello , Are you sure you want to confirm?")
    

    })
})
})