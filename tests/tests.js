const selectors = require('../sources/selectors')
const functions = require('../sources/functions')
const data = require('../sources/data')

module.exports = {

    beforeEach: browser => {
        browser.url('https://jane.com/')
    },
    after: browser => {
        browser.end()
    },
    
    
}