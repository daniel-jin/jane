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
let loginInvalid = (browser) => {
    let homePage = browser.page.homePage();
    homePage.waitForElementVisible('@homepageLogin', 3000)
    homePage
        .click('@homepageLogin')
        .waitForElementVisible('@loginButton', 3000)
    setInputValue(homePage, '@emailInput', "")
    setInputValue(homePage, '@passwordInput', "")
    homePage
        .click('@loginButton')
        .waitForElementVisible('@loginError', 3000)
    homePage.expect.element('@loginError').text.to.equal("The Email Address field is required.")
}

module.exports = {

}