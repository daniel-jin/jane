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
 * Sign up using a valid name, email, and password.
 * @param {object} browser the Nightwatch object
 */
let signUpValid = (browser) => {
    let homePage = browser.page.homePage();
    homePage.waitForElementVisible('@homepageLogin', 3000)
    homePage
        .click('@homepageLogin')
        .waitForElementVisible('@signupLink', 3000)
    homePage
        .click('@signupLink')
        .waitForElementVisible('@signUpButton', 3000)
    setInputValue(homePage, '@nameInput', data.signUp.fullName)
    setInputValue(homePage, '@emailInput', data.signUp.email)
    setInputValue(homePage, '@passwordInput', data.signUp.password)
    homePage
        .click('@signUpButton')
        .waitForElementVisible('@homepageLogin', 3000)
    browser.pause(3000)
    homePage
        .expect.element('@homepageLogin').text.to.equal("Dan")
}

let signUpInvalid = (browser) => {
    let homePage = browser.page.homePage();
    homePage.waitForElementVisible('@homepageLogin', 3000)
    homePage
        .click('@homepageLogin')
        .waitForElementVisible('@signupLink', 3000)
    homePage
        .click('@signupLink')
        .waitForElementVisible('@signUpButton', 3000)
    setInputValue(homePage, '@nameInput', "")
    setInputValue(homePage, '@emailInput', "")
    setInputValue(homePage, '@passwordInput', "")
    homePage
        .click('@signUpButton')
        .waitForElementVisible('@errorBox', 3000)
    homePage.expect.element('@errorBox').text.to.equal("The Full Name field is required.")
}

module.exports = {
    signUpValid: signUpValid,
    signUpInvalid: signUpInvalid
}