const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })


const puppeteer =  require('puppeteer');

const site = process.env.SITE;
const email = process.env.EMAIL;
const senha = process.env.PASSWORD;


async function robo(){

    try{
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
      
        await page.goto(site);
        await page.type('[name="username"]', email);
        await page.type('[name="password"]', senha);
        await page.click('[type="submit"]');
    } catch(error){
        console.log(error);
    }
}

robo();