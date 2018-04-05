const functions = require('../sources/functions/login')

module.exports = {
    beforeEach: browser => {
        browser.url('https://jane.com/')
            .waitForElementPresent('body', 1000)
    },
    after: browser => {
        browser.end()
    },
    'DCS-10: Login (valid inputs)': browser => functions.loginValid(browser),
}