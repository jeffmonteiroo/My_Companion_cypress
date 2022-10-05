
class HomePage {
    go(){
        cy.visit('/')
        cy.wait(1000)
    }

    expiredUser(){
        cy.get('input[placeholder="Usuário ou e-mail"]').type('testej@mozej.com')
        cy.get('input[placeholder="Senha"]').type('T@sy1234')
    }

    submit(){
        cy.get('button[class="c-button c-button--sm c-button--primary c-button--icon-left c-login__action"]').click()
        cy.wait(2000) 
    }

    msgChangePass(){
        cy.get('.c-modal__content--with-stack-manager').should(($text) => {
            expect($text).to.have.length(1)
            expect($text.eq(0)).to.contain('A senha expirou. É necessário alterar sua senha')
          })
    }

    goToForgotPass(){
        cy.contains('Esqueceu sua senha?').click()
    }
    
    enterEmail(){
       cy.get('div[uuid="ea1859d1-e104-49f0-8be8-ef4f338b442e"]').type('jeffmonteiroo@gmail.com')

    }

    clickNext(){
        cy.contains('Próximo').click()
    }

    infoPass(){
        cy.get('div[uuid="5452fcff-57f6-44cc-b1ed-692518c7b66d"]').type('T@sy1234')
        cy.get('div[uuid="25c36bd6-8358-429f-90f0-f1320abfee64"]').type('T@sy1234')
        cy.wait(5000)
    }

    confirm(){
        cy.contains('Confirmar').click()
    }

    validateMsgPass(){
        cy.contains('Senha alterada com sucesso')
    }
    clickSMS(){
        cy.contains('SMS').click()
    }

    enteruser(){
        cy.get('div[uuid="ea1859d1-e104-49f0-8be8-ef4f338b442e"]').type('luffy01')
    }

    clickEmail(){
        cy.contains('E-mail').click()
    }

    newPass(){
        cy.get('div[uuid="6def9148-9c09-452c-b391-c125aa1a6b29"]').type('T@sy1234')
        cy.get('div[uuid="f8a01ec0-9326-4a6a-b7d9-e7faa701c296"]').type('T@sy1234')
        cy.get('div[uuid="668937ac-cbc0-4c9b-9a1a-36b3709d4b4d"]').click()
    }

    userOK(){
        cy.get('input[placeholder="Usuário ou e-mail"]').type('luffy01')
        cy.get('input[placeholder="Senha"]').type('T@sy1234')
    }
    clickExamResults(){
        cy.contains('Resultados dos exames').click()
    }

    clickMenu(){
        cy.wait(3000)
        cy.get('svg[class="c-application-bar__icon c-application-bar__menu"]').click()
    }

    clickInExameLab(){
        cy.contains('Exames lab').click()
    }

    clickAndDownload(){
        cy.get('div[class="c-contextual-bar__options-item c-contextual-bar__icon-dark"]').click()
        cy.wait(2000)
        cy.contains('Baixar').click()
    }

    clickInExameNoLab(){
        cy.contains('RX Mao').click()
    }
    
    sendEmailExameNoLab(){
        cy.get('div[class="c-contextual-bar__options-item c-contextual-bar__icon-dark"]').click()
        cy.wait(2000)
        cy.contains('Enviar por e-mail').click()
        cy.get('div[uuid="04d39c42-7e07-4979-a17f-28f59bcb88d9"]').type('jeffmonteiroo@gmail.com')
        cy.get('div[uuid="48ee12d8-2a60-42d2-bfd2-936e80d58cb5"]').type('Este é um teste feito pelo cypress como demonstração.')
        // cy.get('span[class="c-link__text"]').click()
        cy.wait(2000)
        cy.get('div[uuid="23724d12-8a96-4e10-b5fe-be4a096fdf5c"] button').click()
        cy.wait(5000)
        cy.contains('E-mail enviado')
    }
}



export default new HomePage;