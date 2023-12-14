import { test } from "@playwright/test";
const Tesseract = require('tesseract.js');

test("Image to text- from web ", async ({ page }) => {

    await page.goto("https://www.justdial.com/Chennai/Car-Washing-Services-in-Adyar/nct-10079017");
    const images = await page.locator('//*[@id="slides"]/li/a/div/img');
    const name = Date.now();
    await images.screenshot({ path: `${name}.png` });
    const dataFromImage = await convertImageToText(`${name}.png`)
    console.log(dataFromImage);
});


test("Image list to text- from web ", async ({ page }) => {

    await page.goto("https://www.justdial.com/Chennai");
    const images = await page.$$('//*[@id="slides"]/li/a/img');
    for await (let img of images) {
        const name = Date.now();
        await img.screenshot({ path: `${name}.png` });
        const dataFromImage = await convertImageToText(`${name}.png`)
        console.log(dataFromImage);
    }
});

async function convertImageToText(name: string) {
    let imgText = await Tesseract.recognize(
        `./${name}`);
    return (imgText.data.text);
}