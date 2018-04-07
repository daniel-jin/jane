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

    // Search for "sandals"
    homePage.waitForElementVisible('@searchBar', 5000)
    homePage.click('@searchBar')
    setInputValue(homePage, '@searchBar', "sandals")
    browser.keys(data.enterKey)
    browser.pause(15000)

    // browser.element('css selector', 'button[type="submit"]', function(result){
    //     console.log(result)
    //     if(result.status != -1){
    //         //Element exists, do something
    //         browser.click('select[name="SIZE"]')
    //         browser.pause(10000)
    //     } else{
    //         //Element does not exist, do something else
    //     }
    // });

    //itemDetailPage.click('@addToBagButton')
    //browser.pause(10000)

}

module.exports = {
    addToCart: addToCart,
}