const selectors = require('./selectors')
const data = require('./data')

/**
 * Clears an input field, sets an assigned value, and verifies the value.
 * @param {object} browser the Nightwatch testing object
 * @param {string} selector the selectors on the page
 * @param {string} data input data for the field
 */
let setInputValue = (browser, selector, data) => {
    browser
        .clearValue(selector)
        .setValue(selector, data)
        .verify.value(selector, data)
}

/**
 * 
 * @param {*} browser 
 */
let signUpValid = (browser) => {
    browser.waitForElementVisible(selectors["login/signup"].homepageLogin, 3000)
    browser
        .click(selectors["login/signup"].homepageLogin)
        .waitForElementVisible(selectors["login/signup"].signupLink, 3000)
    browser
        .click(selectors["login/signup"].signupLink)
        .waitForElementVisible(selectors["login/signup"].signUpButton, 3000)
    setInputValue(browser, selectors["login/signup"].nameInput, data.signUp.fullName)
    setInputValue(browser, selectors["login/signup"].emailInput, data.signUp.email)
    setInputValue(browser, selectors["login/signup"].passwordInput, data.signUp.password)
    browser
        .click(selectors["login/signup"].signUpButton)
        .waitForElementVisible(selectors["login/signup"].homepageLogin, 3000)
    browser.pause(3000)
    browser
        .expect.element(selectors["login/signup"].homepageLogin).text.to.equal("Dan")
}

module.exports = {
    signUpValid: signUpValid
}