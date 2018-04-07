const data = require('../data')

/**
 * Login with invalid inputs.
 * @param {object} browser the Nightwatch object 
 */
let favoriteFromHomepage = (browser) => {
    let homePage = browser.page.homePage();
    let favoritesPage = browser.page.favorites();

    homePage.waitForElementVisible('@firstDealFavoriteButton', 5000)
    homePage
        .click('@firstDealFavoriteButton')
        .click('@favoritesButton')
    favoritesPage.waitForElementVisible('@myFavsHeader', 5000)
    favoritesPage.waitForElementVisible('@favItem', 5000)
}

module.exports = {
    favoriteFromHomepage: favoriteFromHomepage,
}