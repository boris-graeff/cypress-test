describe('Test homepage', function () {
  it('Display homepage!', function () {
    cy.visit('/')
    cy.contains('Welcome')
  })
})
