import HomePage from '../pages/HomePage'

describe('Teste - IOS',
  {
    "viewportWidth": 414,
    "viewportHeight": 896
  },
  () => {
  it('TASY_TC_70252	Verify if a screen asking to change the password is displayed in the plataform indicated.', function () {
    HomePage.go()
    HomePage.expiredUser()
    HomePage.submit()
    HomePage.msgChangePass()
    })
  
  it('TASY_TC_71353	Change password by SMS ', function () {
    HomePage.go()
    HomePage.goToForgotPass()
    HomePage.enterEmail()
    HomePage.clickNext()
    HomePage.clickSMS()
    HomePage.clickNext()
    cy.wait(3000)
    cy.task('queryDb', `select ds_chave_sms from teste.wsuite_usuario where nm_usuario_web like'%jeffmonteiroo%'`)
        .then((result) => {
      //console.log('SMS', result[0].DS_CHAVE_SMS);
        let smsKey = result[0].DS_CHAVE_SMS
    cy.get('div[uuid="33ed9569-56d7-4a3e-9ef7-e0186c3e23c0"]').type(smsKey)
    })
    HomePage.clickNext()
    HomePage.infoPass()
    HomePage.confirm()
  //HomePage.validateMsgPass()
})
  it('TASY_TC_71355	Change password by SMS - Expired Link', function () {
    HomePage.go()
    HomePage.goToForgotPass()
    HomePage.enterEmail()
    HomePage.clickNext()
    HomePage.clickSMS()
    HomePage.clickNext()
    cy.task('queryDb', `select ds_chave_sms from teste.wsuite_usuario where nm_usuario_web like'%jeffmonteiroo%'`)
        .then((result) => {
        //console.log('SMS', result[0].DS_CHAVE_SMS);
        let smsKey = result[0].DS_CHAVE_SMS
    cy.get('div[uuid="33ed9569-56d7-4a3e-9ef7-e0186c3e23c0"]').type(smsKey)
    cy.contains('Próximo').click()
    cy.wait(3000)
    cy.contains('Código inválido. Verifique se o código está correto e tente novamente.')
    })

})
  it('Request password reset by Email', function () {
      HomePage.go()
      cy.wait(1000)
      HomePage.goToForgotPass()
      HomePage.enteruser()
      HomePage.clickNext()
      HomePage.clickEmail()
      cy.wait(2000)
      HomePage.clickEmail()
      HomePage.confirm()
})
  it('Change password by the received link', function () {
    cy.task('queryDb', `SELECT MAX(ds_token) ds_token FROM  teste.wsuite_token  WHERE id_subject = '2d5e4c86-db64-4d7e-818e-58626cb62df1' AND dt_used IS NULL AND dt_expiration > sysdate `)
        .then((result) => {
        const dashToken = result[0].DS_TOKEN
    cy.visit('/reset-password?token=' + dashToken, { failOnStatusCode: false })
    cy.wait(2000)
    HomePage.newPass()
      // cy.contains('Você irá receber um e-mail com as informações necessárias para realizar o processo de redefinição de senha.')
    })

  })
})
