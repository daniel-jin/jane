const functions = require('../sources/functions/signup')

module.exports = {
    beforeEach: browser => {
        let homePage = browser.page.homePage();
        homePage.navigate()
    },
    after: browser => {
        browser.end()
    },
    //'DCS-8: Signup (valid inputs)': browser => functions.signUpValid(browser),
    'DCS-9: Signup (invalid inputs)': browser => functions.signUpInvalid(browser)
}