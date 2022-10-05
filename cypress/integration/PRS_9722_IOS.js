

import HomePage from '../pages/HomePage'

describe('The system should allow consulting the image result exams in the Patient Portal',
  {
    "viewportWidth": 414,
    "viewportHeight": 896
  },
  () => {

    it('Sending non-lab exam by email', function () {
      HomePage.go(Cypress.on('uncaught:exception', () => false))
      HomePage.userOK()
      HomePage.submit()
      
      HomePage.clickMenu()
      HomePage.clickExamResults()
      HomePage.clickInExameNoLab()
      HomePage.sendEmailExameNoLab()


    })


  })
