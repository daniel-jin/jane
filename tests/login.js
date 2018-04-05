const functions = require('../sources/functions/login')

module.exports = {
    beforeEach: browser => {
        browser.url('https://jane.com/')
            .waitForElementPresent('body', 1000)
    },
    after: browser => {
        browser.end()
    },
    'DCS-11: Login (invalid inputs)': browser => functions.loginInvalid(browser),
    'DCS-10: Login (valid inputs)': browser => functions.loginValid(browser),
}