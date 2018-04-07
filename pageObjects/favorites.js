module.exports = {
    url: 'https://jane.com/favorites',

    elements: {
        homepageLogin: 'span[class="icon-title__IconText-flJJid bwzEim text__Text-iEUpza htVFSd"]',
        myFavsHeader: 'span[data-testid="my-favs"]',
        favItem:{
            selector: '(//div[@class="lazy-list__ItemContainer-ftkhdy kSeadb box__Box-dJaANZ tNMyj"])//div[1]',
            locateStrategy: 'xpath'
        }
    }
}