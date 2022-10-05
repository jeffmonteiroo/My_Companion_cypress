

import HomePage from '../pages/HomePage'

describe('The system should allow consulting the laboratory result exams in the Patient Portal',
{
  "viewportWidth": 412,
  "viewportHeight": 914
},
() => {

  it('Consulting the laboratory result exam', function () {
    HomePage.go(Cypress.on('uncaught:exception', () => false))
    HomePage.userOK()
    HomePage.submit()
    cy.wait(3000)
    HomePage.clickMenu()
    HomePage.clickExamResults()
    HomePage.clickInExameLab()
    HomePage.clickAndDownload()
  })

})
