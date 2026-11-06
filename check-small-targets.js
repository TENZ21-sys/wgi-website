import puppeteer from 'puppeteer-core';

async function check() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:4173/');

  const small = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('button, a, input, select, textarea'))
      .map((el) => ({
        tag: el.tagName,
        text: el.textContent?.trim().slice(0, 30),
        className: el.className,
        h: Math.round(el.getBoundingClientRect().height),
      }))
      .filter((x) => x.h > 0 && x.h < 36);
  });

  console.log(JSON.stringify(small, null, 2));
  await browser.close();
}

check();
