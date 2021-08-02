
describe('Template store app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('starts with "hello"', () => {
    cy.contains('Hello Typescript!')
  })

})
