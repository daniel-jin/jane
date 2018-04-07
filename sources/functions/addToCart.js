const data = require('../data')

/**
 * Login with invalid inputs.
 * @param {object} browser the Nightwatch object 
 */
let addToCart = (browser) => {
    let homePage = browser.page.homePage();
    let cartPage = browser.page.cartPage();
    let itemDetailPage = browser.page.itemDetailPage();

    homePage.waitForElementVisible('@firstDeal', 5000)
    homePage
        .click('@firstDeal')
    itemDetailPage.waitForElementVisible()
}

module.exports = {
    addToCart: addToCart,
}