export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_JacketAddToCart = '#add-to-cart-sauce-labs-fleece-jacket'
    btn_backToProducts = '#back-to-products'
    link_sauceLabsBikeLight = 'Sauce Labs Bike Light'
    btn_BikeLightAddToCart = '#add-to-cart-sauce-labs-bike-light'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    //back to pruduct list on dashboard
    clickBackToProducts(){
        cy.get(this.btn_backToProducts).click()
        cy.get('.title').should('be.visible')
        // cy.get('.peek').should('be.visible')
        cy.contains('Products').should('contain','Products')

    }
    //add new sauce labs bike light add to cart
    sauceLabsBikeLight(){
        cy.contains(this.link_sauceLabsBikeLight).click()
        cy.contains('Sauce Labs Bike Light').should('be.visible') 
        cy.get(this.btn_BikeLightAddToCart).click()
        cy.contains('Remove').should('be.visible') 
    }
}