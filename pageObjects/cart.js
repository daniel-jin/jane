module.exports = {
    url: 'https://jane.com/checkout',

    elements: {
        firstItem: {
            selector: '//tbody[@ng-repeat="item in cartItems"][1]',
            locateStrategy: 'xpath'
        }
    }
}