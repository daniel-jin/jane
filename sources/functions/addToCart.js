const data = require('../data')

/**
 * Login with invalid inputs.
 * @param {object} browser the Nightwatch object 
 */
let addToCart = (browser) => {
    let homePage = browser.page.homePage();
    let cartPage = browser.page.cartPage();

    homePage.waitForElementVisible('@firstDeal', 5000)
    homePage
        .click('@firstDeal')

}

module.exports = {
    addToCart: addToCart,
}