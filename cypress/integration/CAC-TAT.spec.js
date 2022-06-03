
describe('Central de Atendimento ao Cliente TAT', function(){
    
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    
    it('Verifica o título da aplicação', function(){
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('#firstName').type('Yann')
        cy.get('#lastName').type('Pereira')
        cy.get('#email').type('yann@teste.com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

})
