describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('use can navigate to single Pokemon page', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaurOOO').click()
    cy.contains('chlorophyll')
  })
})