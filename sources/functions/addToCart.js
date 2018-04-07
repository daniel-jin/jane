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
 * Add an item to the cart following a keyword search.
 * @param {object} browser the Nightwatch object 
 */
let addToCart = (browser) => {
    let homePage = browser.page.homePage();
    let cartPage = browser.page.cart();
    let itemDetailPage = browser.page.itemDetailPage();
    let searchResultsPage = browser.page.searchResultsPage();

    // Search for "sandals"
    homePage.waitForElementVisible('@searchBar', 5000)
    homePage.click('@searchBar')
    setInputValue(homePage, '@searchBar', "sandals")
    browser.keys(data.enterKey)

    // Choose a deal, add the item to cart
    searchResultsPage.waitForElementVisible('@firstDeal', 5000)
    searchResultsPage
        .click('@firstDeal')
    browser.waitForElementVisible('button[type="submit"]', 5000)
    browser.element('css selector', 'select[name="Size"]', function(result){
        console.log(result)
        if(result.status != -1){
            browser.click('select[name="Size"]')
        }
    });

    itemDetailPage.click('@addToBagButton')
}

module.exports = {
    addToCart: addToCart,
}