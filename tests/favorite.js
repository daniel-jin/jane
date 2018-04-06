const functions = require('../sources/functions/favorite')

module.exports = {
    beforeEach: browser => {
        let homePage = browser.page.homePage();
        homePage.navigate()
    },
    after: browser => {
        browser.end()
    },
    //'DCS-7 : Favoriting items' : browser => functions.
}