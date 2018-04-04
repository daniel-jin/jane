const selectors = require('./selectors')
const data = require('./data')

let setInputValue = (browser, selector, data) => {
    browser
        .clearValue(selector)
        .setValue(selector, data)
        .verify.value(selector, data)
}

let signUpValid = (browser) => {
    browser
        .click(selectors["login/signup"].homepageLogin)
        .waitForElementVisible(selectors["login/signup"].signupLink, 3000)
    browser
        .click(selectors["login/signup"].signupLink)
        .waitForElementVisible(selectors["login/signup"].signUpButton, 3000)
    setInputValue(browser, selectors["login/signup"].nameInput, "")
    setInputValue(browser, selectors["login/signup"].emailInput, "")
    setInputValue(browser, selectors["login/signup"].passwordInput, "")
    
    


}

module.exports = {

}