const selectors = require('../sources/selectors')
const functions = require('../sources/functions')
const data = require('../sources/data')

module.exports = {
    beforeEach: browser => {
        browser.url('https://jane.com/')
            .waitForElementPresent('body', 1000)
    },
    after: browser => {
        browser.end()
    },
    //'DCS-8: Signup (valid inputs)': browser => functions.signUpValid(browser),
    'DCS-9: Signup (invalid inputs)': browser => functions.signUpInvalid(browser)
}