const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get("https://duckduckgo.com/");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver at DuckDuckGo"), 1000);
    console.log("Test passed!");
  } catch (e) {
    console.log(`Error: ${e}`);
  } finally {
    await driver.sleep(2000); // Delay long enough to see search page!
    await driver.quit();
  }
})();
