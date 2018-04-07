module.exports = {
    url: 'https://jane.com/',

    elements: {
        homepageLogin: 'span[class="icon-title__IconText-flJJid bwzEim text__Text-iEUpza htVFSd"]',
        signupLink: 'p[data-testid="login-form-sign-up-link"]',
        nameInput: 'input[type="text"]',
        emailInput: 'input[type="email"]',
        passwordInput: 'input[type="password"]',
        signUpButton: 'button[class="button__ButtonContent-eBlwbH ccLrVt"]',
        errorBox: 'span[class="text__Text-iEUpza hvHzTI"]',
        loginButton: 'button[class="button__ButtonContent-eBlwbH ccLrVt"]',
        loginError: 'span[class="text__Text-iEUpza hvHzTI"]',
        logOutButton: 'span[data-testid="accountnav-log-out"]',
        favoritesButton: 'i[data-testid="favorites-btn"]',
        firstDeal: {
            selector: '(//div[@class="deal-summaries__ResponsiveDeal-diWryY pDknW deal__DealCard-fQxFXT cslyYA box__Box-dJaANZ eRdFJs"])[1]',
            locateStrategy: 'xpath'
        },
        firstDealFavoriteButton: {
            selector: '(//div[@class="deal-summaries__ResponsiveDeal-diWryY pDknW deal__DealCard-fQxFXT cslyYA box__Box-dJaANZ eRdFJs"])[1]//button[2]',
            locateStrategy: 'xpath'
        },
        searchBar: 'input[data-testid="global-search-input"]',
    }
}