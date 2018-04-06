const data = require('../data')

/**
 * Clears an input field, sets an assigned value, and verifies the value.
 * @param {object} page the homepage
 * @param {string} element the element to input value into
 * @param {string} data input data for the field
 */
let setInputValue = (page, element, data) => {
    page
        .clearValue(element)
        .setValue(element, data)
        .verify.value(element, data)
}

/**
 * Login with invalid inputs.
 * @param {object} browser the Nightwatch object 
 */
let favoriteFromHomepage = (browser) => {
    let homePage = browser.page.homePage();
    let favoritesPage = browser.page.favoritesPage();

    homePage.waitForElementVisible('@firstDeal', 5000)
    homePage
        .click('@firstDealFavoriteButton')
        .click('@favoritesButton')
    favoritesPage.waitForElementVisible('@myFavsHeader', 5000)
    favoritesPage.waitForElementVisible('@favItem', 5000)
}

module.exports = {
    favoriteFromHomepage: favoriteFromHomepage,
}