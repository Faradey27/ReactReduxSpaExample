var url;

const DELAY = 3000;

module.exports = {
  before: function(browser) {
    url = browser.launch_url;
  },
  'Example run' : function (browser) {
    console.log(url)
    browser
      .url(url)
      .waitForElementVisible('div[data-qa="JavaScript: The Good Parts"]', DELAY)
      .waitForElementVisible('div[data-qa="JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)"]', DELAY)
      .waitForElementVisible('div[data-qa="The Ruby Programming Language"]', DELAY)
      .useXpath()
      .click('//*[text()=\'Details\']')
      .waitForElementNotPresent('div[data-qa="The Ruby Programming Language"]', DELAY)
      .end();
  }
};
