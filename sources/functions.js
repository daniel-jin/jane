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
 * Sign up using a valid name, email, and password.
 * @param {object} browser the Nightwatch object
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

let signUpInvalid = (browser) => {
    browser.waitForElementVisible(selectors["login/signup"].homepageLogin, 3000)
    browser
        .click(selectors["login/signup"].homepageLogin)
        .waitForElementVisible(selectors["login/signup"].signupLink, 3000)
    browser
        .click(selectors["login/signup"].signupLink)
        .waitForElementVisible(selectors["login/signup"].signUpButton, 3000)
    setInputValue(browser, selectors["login/signup"].nameInput, "")
    setInputValue(browser, selectors["login/signup"].emailInput, "")
    setInputValue(browser, selectors["login/signup"].passwordInput, "")
    browser
        .click(selectors["login/signup"].signUpButton)
        .waitForElementVisible(selectors["login/signup"].errorBox, 3000)
    browser.expect.element(selectors["login/signup"].errorBox).text.to.equal("The Full Name field is required.")
}

module.exports = {
    signUpValid: signUpValid,
    signUpInvalid: signUpInvalid
}