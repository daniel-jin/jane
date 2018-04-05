const functions = require('../sources/functions/login')

module.exports = {
    beforeEach: browser => {
        let homePage = browser.page.homePage();
        homePage.navigate()
    },
    after: browser => {
        browser.end()
    },
    'DCS-11: Login (invalid inputs)': browser => functions.loginInvalid(browser),
    'DCS-10: Login (valid inputs)': browser => functions.loginValid(browser),
    'DCS-12: Log out': browser => functions.logOut(browser),
}