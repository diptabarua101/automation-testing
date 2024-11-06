const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
//const chrome = require ("selenium-webdriver/chrome");
const productName ="Nike  react phantom run flyknit 2";
 async function testRun(){

    let driver = await new Builder().forBrowser("chrome").build();
    await driver .manage().window().fullscreen();
    await driver.get("https://demo.evershop.io/");
    await driver.findElement(by.xpath("//@class= 'search-icon'}")).click();
    await  driver.findElement(by.xpath("//input[@placehlder='search']")).sendKeys("Nike");
    await  driver.findElement(by.xpath("//input[@placehlder='search']")).sendKeys(Key.ENTER);
    p
    await driver.findElement
    await driver.sleep(5000);
    await driver.quit();
}
function test() {
    const test = testRun();
}
testRun();