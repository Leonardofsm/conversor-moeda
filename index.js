const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync')
console.log('inicio robo puppeteer')

async function robo() {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  const moedaInicial = readlineSync.question('digite a moeda inicial: ') ||'dolar';
  const moedaFinal = readlineSync.question('digite a moedal fim: ') || 'real';
  const convertMoeda = `https://www.google.com/search?q=${moedaInicial}+para+${moedaFinal}&oq=${moedaInicial}+para+${moedaFinal}&aqs=chrome.0.0i433l2j0j0i433j0j69i60l3.5831j1j7&sourceid=chrome&ie=UTF-8`;
  await page.goto(convertMoeda);
//   await page.screenshot({ path: 'example.png' });
  const resposta = await page.evaluate(() => {
      return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  })

  await browser.close();
  console.log(`O valor de 1 ${moedaInicial} em ${moedaFinal} é ${resposta}`)
  console.log('processo finalizado robo puppeteer')
}

robo();
