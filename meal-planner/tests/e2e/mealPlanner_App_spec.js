describe('Take 7 Test', function () {
    it('finds an element', () => {
        cy.visit('/')
        cy.pause()
        cy.contains('Mittwoch').click()
        cy.contains('Gemüselasagne')
        cy.contains('Rezept').click()
        cy.get('h2').should('contain', 'Gemüselasagne')
        cy.contains('Blattspinat')
        const closeBox = cy
            .get('span[data-testid="close-button"]')
            .should('contain', '×')
        closeBox.click()
    })
})
