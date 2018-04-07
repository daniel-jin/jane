const data = require('../data')

/**
 * Login with invalid inputs.
 * @param {object} browser the Nightwatch object 
 */
let addToCart = (browser) => {
    let homePage = browser.page.homePage();
    let cartPage = browser.page.cart();
    let itemDetailPage = browser.page.itemDetailPage();

    homePage.waitForElementVisible('@firstDeal', 5000)
    homePage
        .click('@firstDeal')
    itemDetailPage.waitForElementVisible('@addToBagButton', 3000)

    browser.element('css selector', 'button[type="submit"]', function(result){
        console.log(result)
        if(result.status != -1){
            //Element exists, do something
            browser.click('select[name="SIZE"]')
            browser.pause(10000)
        } else{
            //Element does not exist, do something else
        }
    });

    //itemDetailPage.click('@addToBagButton')
    //browser.pause(10000)

}

module.exports = {
    addToCart: addToCart,
}