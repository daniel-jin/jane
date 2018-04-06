const loginFunctions = require('../sources/functions/login')
const favFunctions = require('../sources/functions/favorite')

module.exports = {
    beforeEach: browser => {
        let homePage = browser.page.homePage();
        homePage.navigate()
    },
    after: browser => {
        browser.end()
    },
    'DCS-11: Login (invalid inputs)': browser => loginFunctions.loginInvalid(browser),
    'DCS-10: Login (valid inputs)': browser => loginFunctions.loginValid(browser),
    'DCS-7 : Favoriting items' : browser => favFunctions.favoriteFromHomepage(browser),
    'DCS-12: Log out': browser => loginFunctions.logOut(browser),
}