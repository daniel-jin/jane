const selectors = require('../selectors')
const data = require('../data')

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
 * Log in with a valid email and password.
 * @param {object} browser the Nightwatch object
 */
let loginValid = (browser) => {
    browser.waitForElementVisible(selectors["login/signup"].homepageLogin, 3000)
    browser
        .click(selectors["login/signup"].homepageLogin)

    // // If already logged in, log out first
    // brower.element('css selector', selectors["login/signup"].homepageLogin, function(result){

    //     if(result.text === "Dan") {
    //         browser.click()
    //     }
    // })

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
 * Login with invalid inputs.
 * @param {object} browser the Nightwatch object 
 */
let loginInvalid = (browser) => {
    browser.waitForElementVisible(selectors["login/signup"].homepageLogin, 3000)
    browser
        .click(selectors["login/signup"].homepageLogin)
        .waitForElementVisible(selectors["login/signup"].loginButton, 3000)
    setInputValue(browser, selectors["login/signup"].emailInput, "")
    setInputValue(browser, selectors["login/signup"].passwordInput, "")
    browser
        .click(selectors["login/signup"].loginButton)
        .waitForElementVisible(selectors["login/signup"].loginError, 3000)
    browser.expect.element(selectors["login/signup"].loginError).text.to.equal("The Email Address field is required.")
}

/**
 * Log out of an account.
 * @param {object} browser the Nightwatch object
 */
let logOut = browser => {
    loginValid(browser)
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