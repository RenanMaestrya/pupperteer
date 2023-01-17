const puppeteer =  require('puppeteer')
console.log('Bem vindo');

async function robo(){
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    await page.goto('https://zplay.serveript.com/index.php?exe=logoff');
    await page.type('[name="username"]', 'renanalmeida2.ra@gmail.com.br');
    await page.type('[name="password"]', 'Mancoso200400');
    await page.click('[type="submit"]');


    // await page.click('#vertical-menu-btn');
}

robo();