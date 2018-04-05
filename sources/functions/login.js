const selectors = require('../selectors')
const data = require('../data')

/**
 * Clears an input field, sets an assigned value, and verifies the value.
 * @param {object} browser the Nightwatch testing object
 * @param {string} selector the selectors on the page
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
    homePage.navigate()
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

/**
 * Log in with a valid email and password.
 * @param {object} browser the Nightwatch object
 */
let loginValid = (browser) => {
    browser.waitForElementVisible(selectors["login/signup"].homepageLogin, 3000)
    browser
        .click(selectors["login/signup"].homepageLogin)

    browser.waitForElementVisible(selectors["login/signup"].signupLink, 3000)
    setInputValue(browser, selectors["login/signup"].emailInput, data.signUp.email)
    setInputValue(browser, selectors["login/signup"].passwordInput, data.signUp.password)
    browser
        .click(selectors["login/signup"].loginButton)
        .waitForElementVisible(selectors["login/signup"].homepageLogin, 3000)
    browser.pause(3000)
    browser
        .expect.element(selectors["login/signup"].homepageLogin).text.to.equal("Dan")
}

/**
 * Log out of an account.
 * @param {object} browser the Nightwatch object
 */
let logOut = browser => {
    browser
        .click(selectors["login/signup"].homepageLogin)
        .waitForElementVisible(selectors["login/signup"].logOutButton, 2000)
    browser
        .click(selectors["login/signup"].logOutButton)
        .waitForElementVisible(selectors["login/signup"].homepageLogin, 2000)
    browser.pause(2000)
    browser.expect.element(selectors["login/signup"].homepageLogin).text.to.equal("Login")
}

module.exports = {
    loginValid: loginValid,
    loginInvalid: loginInvalid,
    logOut: logOut,
}