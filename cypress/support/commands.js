Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Yann')
    cy.get('#lastName').type('Pereira')
    cy.get('#email').type('yann@teste.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()

})

