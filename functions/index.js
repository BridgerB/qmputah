const functions = require("firebase-functions");
const puppeteer = require('puppeteer');
const admin = require('firebase-admin');
const cheerio = require('cheerio')
const axios = require('axios');
admin.initializeApp();
const { getDatabase, serverTimestamp } = require('firebase-admin/database');
const db = getDatabase();
const ref = db.ref('priceHistory');
const refqmps = db.ref('qmpsCorrected');

exports.puppeteer = functions.runWith({ timeoutSeconds: 240, memory: "2GB" }).pubsub.schedule('0 9 * * *').timeZone('America/Denver').onRun(async (context) => {
  const browser = await puppeteer.launch({ headless: true });
  //const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  let yearMonthDay = new Date().toJSON().substring(0, 10);
  let writeResult, updatedPrices, newPatient, renewActive6, renewActive12, renewExpired;
  let failures = [];

  try {
    stateID = 16
    qmpID = 9
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");
    await page.goto('https://www.swahnbalancedhealth.com/bookonline', { waitUntil: 'networkidle2' })
    updatedPrices = await page.evaluate(() => {
      newPatient = parseInt(document.querySelector('.s1v6MB:nth-child(4) > .s9lKFt > .s119cW > .s26NhE > div > section > .s3NH0r').innerHTML.substring(1));
      renewActive6 = parseInt(document.querySelector(`.s1v6MB:nth-child(5) > .s9lKFt > .s119cW > .s26NhE > div > section > .s3NH0r`).innerHTML.substring(1));
      timestamp = Date.now()
      updateMethod = `web`;
      return { newPatient, renewActive6, timestamp, updateMethod }
    })
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices });
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    stateID = 22
    qmpID = 15
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");
    await page.goto('https://loganmed.org/endo/medical-cannabis/', { waitUntil: 'networkidle2' })
    updatedPrices = await page.evaluate(() => {
      newPatient = parseInt(document.querySelector('#text_block-107-2554').innerHTML.substring(81, 84));
      renewActive6 = parseInt(document.querySelector(`#text_block-107-2554`).innerHTML.substring(38, 41));
      timestamp = Date.now()
      updateMethod = `web`;
      return { newPatient, renewActive6, timestamp, updateMethod }
    })
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices });
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }


  try {
    stateID = 32
    qmpID = 22
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");
    await page.goto('https://skinlove.myaestheticrecord.com/book/appointments', { waitUntil: 'networkidle2' })
    await page.waitForSelector(`#inPerson`, { visible: true });
    await page.click('#inPerson')
    await page.waitForSelector(`#heading_15 > h4 > a > span.when-closed`, { visible: true });
    await page.click('#heading_15 > h4 > a > span.when-closed')
    await page.evaluate(() => { document.querySelector("#modal-description").scrollIntoView(true); })
    await page.click('#accordion-4 > div > div > div.package-name > a')
    updatedPrices = await page.evaluate(() => {
      newPatient = parseInt(document.querySelector("#modal-description").innerText.substring(639, 642));
      renewActive6 = parseInt(document.querySelector("#modal-description").innerText.substring(663, 665));
      timestamp = Date.now()
      updateMethod = `web`;
      return { newPatient, renewActive6, timestamp, updateMethod }
    })
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices });
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }


  try {
    stateID = 50
    qmpID = 35
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");
    await page.goto('https://www.infusezenmedspa.com/private-sessions', { waitUntil: 'networkidle2' })
    updatedPrices = await page.evaluate(() => {
      newPatient = parseInt(document.querySelector('.s1v6MB:nth-child(6) > .s1OWHA > .szuksk > .s26NhE > div > section > .s3NH0r:nth-child(4)').innerHTML.substring(1, 4));
      renewActive6 = parseInt(document.querySelector(`.s1v6MB:nth-child(7) > .s1OWHA > .szuksk > .s26NhE > div > section > .s3NH0r:nth-child(4)`).innerHTML.substring(1, 4));
      timestamp = Date.now()
      updateMethod = `web`;
      return { newPatient, renewActive6, timestamp, updateMethod }
    })
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices });
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }


  try {
    stateID = 134
    qmpID = 75 //TODO check all locations etc
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");
    await page.goto('https://empathetix.com/', { waitUntil: 'networkidle2' })
    updatedPrices = await page.evaluate(() => {
      newPatient = parseInt(document.querySelector('.vc_col-sm-12 > .vc_column-inner > .wpb_wrapper > .wpb_text_column > .wpb_wrapper > h3').innerHTML.substring(1, 4));
      renewActive6 = parseInt(document.querySelector(`.vc_col-sm-12 > .vc_column-inner > .wpb_wrapper > .wpb_text_column > .wpb_wrapper > h3`).innerHTML.substring(44, 48));
      timestamp = Date.now()
      updateMethod = `web`;
      return { newPatient, renewActive6, timestamp, updateMethod }
    })
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices });
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  //   response = await axios.get('https://empathetix.com/')
  //   const $ = cheerio.load(response.data);
  //   updatedPrices.newPatient = parseInt($(`div.swiper-slide:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(2) > span:nth-child(1)`).text().substring(1, 4));
  //   updatedPrices.renewActive6 = parseInt($(`div.swiper-slide:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(2) > span:nth-child(1)`).text().substring(40, 43));
  //   updatedPrices.timestamp = Date.now()
  //   updatedPrices.updateMethod = `web`;
  //   ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
  //   refqmps.child(qmpID).update(updatedPrices)
  // } catch (err) { failures.push(err) }


  try {
    stateID = 197
    qmpID = 88
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");
    await page.goto('https://www.medicalreflections.net/', { waitUntil: 'networkidle2' })
    updatedPrices = await page.evaluate(() => {
      newPatient = parseInt(document.querySelector(`.grid__item:nth-child(2) > .card > .meta > .action > .action-container > div > .w-wrapper > .text-component > .text-component`).innerText.substring(1));
      renewActive6 = parseInt(document.querySelector(`.grid__item:nth-child(3) > .card > .meta > .action > .action-container > div > .w-wrapper > .text-component > .text-component`).innerText.substring(1));
      timestamp = Date.now()
      updateMethod = `web`;
      return { newPatient, renewActive6, timestamp, updateMethod }
    })
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices });
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    stateID = 200
    qmpID = 90
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");
    await page.goto('https://app.acuityscheduling.com/schedule.php?owner=21672284', { waitUntil: 'networkidle2' })
    await page.click('#categoryType-0-container > button')
    await new Promise(resolve => setTimeout(resolve, 3000));
    updatedPrices = await page.evaluate(() => {
      newPatient = parseInt(document.querySelector(`#appointment-25806901-original-price`).innerText.substring(1, 4));
      renewActive6 = parseInt(document.querySelector(`#appointment-25806935-original-price`).innerText.substring(1, 4));
      timestamp = Date.now()
      updateMethod = `web`;
      return { newPatient, renewActive6, timestamp, updateMethod }
    })
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices });
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    stateID = 229
    qmpID = 105
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");
    await page.goto('https://www.vagaro.com/us02/agelessineden/services', { waitUntil: 'networkidle2' })
    updatedPrices = await page.evaluate(() => {
      newPatient = parseInt(document.querySelector(`#col20198971 > div > article:nth-child(1) > div.service-detaildiv > div > div.service-name-price > div.service-price-alt.new-vgtext-color`).innerText.substring(1, 4));
      renewActive6 = parseInt(document.querySelector(`#col20198971 > div > article:nth-child(2) > div.service-detaildiv > div > div.service-name-price`).innerText.substring(26, 28));
      timestamp = Date.now()
      updateMethod = `web`;
      return { newPatient, renewActive6, timestamp, updateMethod }
    })
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices });
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    stateID = 253
    qmpID = 116
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");
    await page.goto('https://cannabisprescribersutah.com/prices', { waitUntil: 'networkidle2' })
    updatedPrices = await page.evaluate(() => {
      newPatient = parseInt(document.querySelector(`.c1-9b > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)`).innerText.substring(1,4));
      renewActive6 = parseInt(document.querySelector(`.c1-9b > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)`).innerText.substring(1,4));
      timestamp = Date.now()
      updateMethod = `web`;
      return { newPatient, renewActive6, timestamp, updateMethod }
    })
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices });
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }



  try {
    stateID = 281
    qmpID = 134
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");
    await page.goto('https://provowellnesscenter.com/pricing', { waitUntil: 'networkidle2' })
    page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight);
    });
    page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight);
    });
    page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight);
    });
    page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.waitForSelector(`#bs-7 > span > section > div > div > div > div > div > div:nth-child(1) > div > div > div > div.x-el.x-el-div.c2-1.c2-2.c2-1x.c2-54.c2-55.c2-45.c2-3.c2-4.c2-5.c2-6.c2-7.c2-8 > div:nth-child(2) > div > div:nth-child(2)`, { visible: false });
    updatedPrices = await page.evaluate(() => {
      newPatient = parseInt(document.querySelector(`#bs-7 > span > section > div > div > div > div > div > div:nth-child(1) > div > div > div > div.x-el.x-el-div.c2-1.c2-2.c2-1x.c2-54.c2-55.c2-45.c2-3.c2-4.c2-5.c2-6.c2-7.c2-8 > div:nth-child(2) > div > div:nth-child(2)`).innerText.substring(1, 4));
      renewActive6 = parseInt(document.querySelector(`#bs-7 > span > section > div > div > div > div > div > div:nth-child(2) > div > div > div > div.x-el.x-el-div.c2-1.c2-2.c2-1x.c2-54.c2-55.c2-45.c2-3.c2-4.c2-5.c2-6.c2-7.c2-8 > div:nth-child(2) > div > div:nth-child(2)`).innerText.substring(1, 4));
      timestamp = Date.now()
      updateMethod = `web`;
      return { newPatient, renewActive6, timestamp, updateMethod }
    })
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices });
    refqmps.child(qmpID).update(updatedPrices)
    await browser.close();
  } catch (err) { failures.push(err) }

  await browser.close();

  console.log(failures)
  console.log(`end`)
});

exports.axios = functions.runWith({ timeoutSeconds: 240, memory: "2GB" }).pubsub.schedule('0 9 * * *').timeZone('America/Denver').onRun(async (context) => {
  let yearMonthDay = new Date().toJSON().substring(0, 10);
  let updatedPrices = {};
  let qmpID;
  let failures = [];

  try {
    updatedPrices = {};
    stateID = 1
    qmpID = 0
    response = await axios.get('https://www.synergyhawc.com/services')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#block-yui_3_17_2_1_1655481711846_3551 > div > p:nth-child(1)`).text().substring(27, 30));
    updatedPrices.renewActive6 = parseInt($(`#block-yui_3_17_2_1_1655481711846_3551 > div > p:nth-child(2)`).text().substring(17, 20));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 2
    qmpID = 1
    response = await axios.get('https://www.aspenfamed.com/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#comp-ksar8djx > ul > li:nth-child(1) > p > span`).text().substring(28, 31));
    updatedPrices.renewActive6 = parseInt($(`#comp-ksar8djx > ul > li:nth-child(2) > p > span`).text().substring(28, 31));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 8
    qmpID = 4
    response = await axios.get('https://utahmarijuana.org/faq/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#code_block-536-85 > div`).text().substring(686, 689));
    updatedPrices.renewActive6 = parseInt($(`#code_block-536-85 > div`).text().substring(741, 744));
    updatedPrices.renewActive12 = parseInt($(`#code_block-536-85 > div`).text().substring(741, 744));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 68
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 71
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 112
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 127
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }
  try {
    updatedPrices = {};
    stateID = 15
    qmpID = 8
    response = await axios.get('https://brandymariefamilyaesthetic.com/cash-pay-services')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`div.c1-6t:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)`).text());
    updatedPrices.renewActive6 = parseInt($(`div.c1-6t:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)`).text());
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }
  // try {
  //   updatedPrices = {};
  //   stateID = 16
  //   qmpID = 9
  //   response = await axios.get('https://www.swahnbalancedhealth.com/bookonline')
  //   const $ = cheerio.load(response.data);
  //   updatedPrices.newPatient = parseInt($(`li.s38HpM:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(4) > span:nth-child(3)`).text().substring(1, 4));
  //   updatedPrices.renewActive6 = parseInt($(`li.s38HpM:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(4) > span:nth-child(3)`).text().substring(1, 4));
  //   updatedPrices.timestamp = Date.now()
  //   updatedPrices.updateMethod = `web`;
  //   ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
  //   refqmps.child(qmpID).update(updatedPrices)
  // } catch (err) { failures.push(err) }

  // try {
  //   updatedPrices = {};
  //   stateID = 22
  //   qmpID = 15
  //   response = await axios.get('https://loganmed.org/cve/index.php/medical-cannabis/')
  //   const $ = cheerio.load(response.data);
  //   updatedPrices.newPatient = parseInt($(`#popmake-204 > div.pum-content.popmake-content > h2`).text().substring(81, 84));
  //   updatedPrices.renewActive6 = parseInt($(`#popmake-204 > div.pum-content.popmake-content > h2`).text().substring(38, 41));
  //   updatedPrices.timestamp = Date.now()
  //   updatedPrices.updateMethod = `web`;
  //   ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
  //   refqmps.child(qmpID).update(updatedPrices)
  // } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 26
    qmpID = 17 //TODO has a transfer fee I havent done yet..
    response = await axios.get('https://www.thc4healing.com/artificial-intelligence-researcher')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`p.font_8:nth-child(61) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)`).text().substring(1, 4));
    updatedPrices.renewActive6 = parseInt($(`p.font_8:nth-child(153) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)`).text().substring(1, 4));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }
  try {
    updatedPrices = {};
    stateID = 29
    qmpID = 20
    response = await axios.get('https://kaysvilleclinic.com/medical-marijuana/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#c5ab-widget-tUptIqFuQM > div > div > p`).text().substring(138, 141));
    updatedPrices.renewActive6 = parseInt($(`#c5ab-widget-tUptIqFuQM > div > div > p`).text().substring(160, 163));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 31
    qmpID = 21
    response = await axios.get('https://www.hollandholistic.com/services')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#block-yui_3_17_2_1_1592358579953_9756 > div > p:nth-child(9)`).text().substring(46, 49));
    updatedPrices.renewActive6 = parseInt($(`#block-yui_3_17_2_1_1592358579953_9756 > div > p:nth-child(9)`).text().substring(208, 211));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 158
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 41
    qmpID = 28
    response = await axios.get('https://medicalcannabisofutah.com/pricing')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#\\35 8621fb1-67d1-4625-ae7e-204729d26d39 > div.x-el.c1-1.c1-2.c1-1g.c1-1h.c1-1i.c1-1j.c1-1k.c1-af.c1-ag.c1-ah.c1-ai.c1-aj.c1-ak.c1-al.c1-am.c1-an.c1-ao.c1-ap.c1-aq.c1-ar.c1-as.c1-at.c1-au.c1-av.c1-aw.c1-ax.c1-ay.c1-az.c1-b0.c1-b1.c1-b2.c1-b3.c1-b4.c1-b5.c1-b6.c1-3j.c1-b.c1-b7.c1-c.c1-1n.c1-d.c1-e.c1-f.c1-g.x-rt > p:nth-child(4) > span`).text().substring(1, 4));
    updatedPrices.renewActive6 = parseInt($(`#\\39 0454afa-a7f0-4fed-ab1c-02cbadd04042 > div:nth-child(2) > p:nth-child(3) > span:nth-child(1)`).text().substring(1, 4));
    updatedPrices.renewExpired = parseInt($(`#\\37 7878da9-1e7c-476a-9431-9ca33fd3d3fe > div.x-el.c1-1.c1-2.c1-1g.c1-1h.c1-1i.c1-1j.c1-1k.c1-af.c1-ag.c1-ah.c1-ai.c1-aj.c1-ak.c1-al.c1-am.c1-an.c1-ao.c1-ap.c1-aq.c1-ar.c1-as.c1-at.c1-au.c1-av.c1-aw.c1-ax.c1-ay.c1-az.c1-b0.c1-b1.c1-b2.c1-b3.c1-b4.c1-b5.c1-b6.c1-3j.c1-b.c1-b7.c1-c.c1-1n.c1-d.c1-e.c1-f.c1-g.x-rt > p:nth-child(3) > span > strong`).text().substring(1, 4));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 37
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 109
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 130
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 144
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 165
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 166
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 167
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 168
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 169
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 170
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 171
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)

  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 42
    qmpID = 29
    response = await axios.get('https://www.naturalmedicineclinicofutah.com/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#post-6 > div > div > div > div.et_pb_section.et_pb_section_1.et_section_regular > div.et_pb_row.et_pb_row_3.et_pb_equal_columns > div.et_pb_column.et_pb_column_1_2.et_pb_column_8.et_pb_css_mix_blend_mode_passthrough.et-last-child > div.et_pb_module.et_pb_text.et_pb_text_12.et_pb_text_align_left.et_pb_bg_layout_light > div > p:nth-child(2)`).text().substring(19, 22));
    updatedPrices.renewActive6 = parseInt($(`#post-6 > div > div > div > div.et_pb_section.et_pb_section_1.et_section_regular > div.et_pb_row.et_pb_row_3.et_pb_equal_columns > div.et_pb_column.et_pb_column_1_2.et_pb_column_8.et_pb_css_mix_blend_mode_passthrough.et-last-child > div.et_pb_module.et_pb_text.et_pb_text_12.et_pb_text_align_left.et_pb_bg_layout_light > div > p:nth-child(3)`).text().substring(18, 22));
    updatedPrices.renewExpired = parseInt($(`#post-6 > div > div > div > div.et_pb_section.et_pb_section_1.et_section_regular > div.et_pb_row.et_pb_row_3.et_pb_equal_columns > div.et_pb_column.et_pb_column_1_2.et_pb_column_8.et_pb_css_mix_blend_mode_passthrough.et-last-child > div.et_pb_module.et_pb_text.et_pb_text_12.et_pb_text_align_left.et_pb_bg_layout_light > div > p:nth-child(4)`).text().substring(15, 18));
    updatedPrices.renewActive12 = parseInt($(`#post-6 > div > div > div > div.et_pb_section.et_pb_section_1.et_section_regular > div.et_pb_row.et_pb_row_3.et_pb_equal_columns > div.et_pb_column.et_pb_column_1_2.et_pb_column_8.et_pb_css_mix_blend_mode_passthrough.et-last-child > div.et_pb_module.et_pb_text.et_pb_text_12.et_pb_text_align_left.et_pb_bg_layout_light > div > p:nth-child(5)`).text().substring(17, 20));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  // try {
  //   updatedPrices = {};
  //   stateID = 50
  //   qmpID = 35
  //   response = await axios.get('https://www.infusezenmedspa.com/private-sessions')
  //   const $ = cheerio.load(response.data);
  //   updatedPrices.newPatient = parseInt($(`li.s38HpM:nth-child(6) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(3) > span:nth-child(4)`).text().substring(1, 4));
  //   updatedPrices.renewActive6 = parseInt($(`li.s38HpM:nth-child(7) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > section:nth-child(3) > span:nth-child(4)`).text().substring(1, 4));
  //   updatedPrices.timestamp = Date.now()
  //   updatedPrices.updateMethod = `web`;
  //   ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
  //   refqmps.child(qmpID).update(updatedPrices)
  // } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 55
    qmpID = 40
    response = await axios.get('https://greenhealthdocs.com/how-to-get-medical-marijuana-card-utah/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`div.uabb-faq-item:nth-child(4) > div:nth-child(2) > p:nth-child(1)`).text().substring(91, 94));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 84
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 60
    qmpID = 44
    response = await axios.get('https://breenfamilymedicine.com/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#a4158b03-9699-413f-87f6-44fc34675407 > div > section > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-6s.c1-72.c1-73.c1-74.c1-z.c1-2r.c1-75.c1-2s.c1-76.c1-9d.c1-b.c1-c.c1-9e.c1-9f.c1-79.c1-7a.c1-9g.c1-7c.c1-d.c1-9h.c1-9i.c1-9j.c1-e.c1-f.c1-g > div > div > p:nth-child(13) > span > strong`).text().substring(1, 4));
    updatedPrices.renewActive6 = parseInt($(`#a4158b03-9699-413f-87f6-44fc34675407 > div > section > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-6s.c1-72.c1-73.c1-74.c1-z.c1-2r.c1-75.c1-2s.c1-76.c1-9d.c1-b.c1-c.c1-9e.c1-9f.c1-79.c1-7a.c1-9g.c1-7c.c1-d.c1-9h.c1-9i.c1-9j.c1-e.c1-f.c1-g > div > div > p:nth-child(13) > span > strong`).text().substring(28, 31));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 60
    qmpID = 44
    response = await axios.get('https://breenfamilymedicine.com/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#a4158b03-9699-413f-87f6-44fc34675407 > div > section > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-6s.c1-72.c1-73.c1-74.c1-z.c1-2r.c1-75.c1-2s.c1-76.c1-9d.c1-b.c1-c.c1-9e.c1-9f.c1-79.c1-7a.c1-9g.c1-7c.c1-d.c1-9h.c1-9i.c1-9j.c1-e.c1-f.c1-g > div > div > p:nth-child(13) > span > strong`).text().substring(1, 4));
    updatedPrices.renewActive6 = parseInt($(`#a4158b03-9699-413f-87f6-44fc34675407 > div > section > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-6s.c1-72.c1-73.c1-74.c1-z.c1-2r.c1-75.c1-2s.c1-76.c1-9d.c1-b.c1-c.c1-9e.c1-9f.c1-79.c1-7a.c1-9g.c1-7c.c1-d.c1-9h.c1-9i.c1-9j.c1-e.c1-f.c1-g > div > div > p:nth-child(13) > span > strong`).text().substring(28, 31));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 72
    qmpID = 54
    response = await axios.get('https://www.restorativehealthprimarycare.com/treatment-prices/medical-cannabis-card')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`p.CDt4Ke:nth-child(3)`).text().substring(27, 30));
    updatedPrices.renewActive6 = parseInt($(`#h\\.45400f7033e1a885_946 > div > div > p:nth-child(4) > span > strong`).text().substring(11, 14));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }


  // try {
  //   updatedPrices = {};
  //   stateID = 134
  //   qmpID = 75 //TODO check all locations etc
  //   response = await axios.get('https://empathetix.com/')
  //   const $ = cheerio.load(response.data);
  //   updatedPrices.newPatient = parseInt($(`div.swiper-slide:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(2) > span:nth-child(1)`).text().substring(1, 4));
  //   updatedPrices.renewActive6 = parseInt($(`div.swiper-slide:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(2) > span:nth-child(1)`).text().substring(40, 43));
  //   updatedPrices.timestamp = Date.now()
  //   updatedPrices.updateMethod = `web`;
  //   ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
  //   refqmps.child(qmpID).update(updatedPrices)
  // } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 177
    qmpID = 76
    response = await axios.get('https://utahcanna.org/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#post-95 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1468cb03.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > section > div > div > div.aux-parallax-section.elementor-column.elementor-col-50.elementor-inner-column.elementor-element.elementor-element-65dd97cb > div > div > div > div > div.elementor-price-table > div.elementor-price-table__price > span.elementor-price-table__integer-part`).text().substring(0, 3));
    updatedPrices.renewActive6 = parseInt($(`#post-95 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1468cb03.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > section > div > div > div.aux-parallax-section.elementor-column.elementor-col-50.elementor-inner-column.elementor-element.elementor-element-626f93b7 > div > div > div > div > div.elementor-price-table > div.elementor-price-table__price > span.elementor-price-table__integer-part`).text().substring(0, 3));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 111
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
    qmpID = 162
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 184
    qmpID = 81
    response = await axios.get('https://www.lotus.health/medical-cannabis/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`body > div.elementor.elementor-187.elementor-location-single.post-210.page.type-page.status-publish.has-post-thumbnail.hentry.entry > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-79c430be.elementor-reverse-mobile.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > p:nth-child(12)`).text().substring(29, 32));
    updatedPrices.renewActive6 = parseInt($(`body > div.elementor.elementor-187.elementor-location-single.post-210.page.type-page.status-publish.has-post-thumbnail.hentry.entry > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-79c430be.elementor-reverse-mobile.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > p:nth-child(15)`).text().substring(11, 14));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 186
    qmpID = 82
    response = await axios.get('https://app.squarespacescheduling.com/schedule.php?owner=23158223')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#appointment-23493635-original-price`).text().substring(38, 41));
    updatedPrices.renewActive6 = parseInt($(`#appointment-23494377-original-price`).text().substring(38, 41));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 222
    qmpID = 102
    response = await axios.get('https://www.enlivenyourself.com/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#block-yui_3_17_2_1_1635531154271_9161 > div > p:nth-child(1)`).text().substring(18, 21));
    updatedPrices.renewActive6 = parseInt($(`#block-yui_3_17_2_1_1635531154271_9161 > div > p:nth-child(2)`).text().substring(10, 13));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 232
    qmpID = 108
    response = await axios.get('https://cacheketamine.com/medical-cannabis/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#post-744 > div > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-0106df0.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div.elementor-container.elementor-column-gap-default > div > div > div > div > div.elementor-element.elementor-element-c06d07e.elementor-widget.elementor-widget-text-editor > div > div > ul:nth-child(2) > li`).text().substring(1, 4));
    updatedPrices.renewActive6 = parseInt($(`#post-744 > div > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-0106df0.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div.elementor-container.elementor-column-gap-default > div > div > div > div > div.elementor-element.elementor-element-c06d07e.elementor-widget.elementor-widget-text-editor > div > div > ul:nth-child(4) > li`).text().substring(1, 4));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 248
    qmpID = 113
    response = await axios.get('https://urgentcareavan.com/medical-cannabis/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#post-30204 > div > div > div > div.et_pb_section.et_pb_section_0.btn-inline.et_pb_with_background.et_section_regular > div > div > div.et_pb_module.et_pb_text.et_pb_text_1.et_pb_text_align_left.et_pb_bg_layout_light > div > h6`).text().substring(1, 4));
    updatedPrices.renewActive6 = parseInt($(`#post-30204 > div > div > div > div.et_pb_section.et_pb_section_0.btn-inline.et_pb_with_background.et_section_regular > div > div > div.et_pb_module.et_pb_text.et_pb_text_3.et_pb_text_align_left.et_pb_bg_layout_light > div > p`).text().substring(45, 47));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 251
    qmpID = 115
    response = await axios.get('https://coreyandenmd.com/medical-cannabis/medical-cannabis-application/')
    let $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#main > div.main_color.container_wrap_first.container_wrap.fullsize > div > main > div > div > div.flex_column.av_one_full.flex_column_div.av-zero-column-padding.first.avia-builder-el-6.el_after_av_hr.avia-builder-el-last > section > div > section:nth-child(2) > div > p:nth-child(8) > em`).text().substring(34, 37));
    response = await axios.get('https://coreyandenmd.com/medical-cannabis/medical-cannabis-follow-up/')
    $ = cheerio.load(response.data);
    updatedPrices.renewActive6 = parseInt($(`#main > div.main_color.container_wrap_first.container_wrap.fullsize > div > main > div > div > div.flex_column.av_one_half.flex_column_div.av-zero-column-padding.first.avia-builder-el-3.el_after_av_hr.el_before_av_one_half > div.av-special-heading.av-special-heading-h3.blockquote.modern-quote.modern-centered.avia-builder-el-4.el_before_av_textblock.avia-builder-el-first > h3`).text().substring(30, 33));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  // try {
  //   updatedPrices = {};
  //   stateID = 253
  //   qmpID = 116
  //   response = await axios.get('https://cannabisprescribersutah.com/prices')
  //   const $ = cheerio.load(response.data);
  //   updatedPrices.newPatient = parseInt($(`#\\36 db5b7a2-9ea2-4ccd-bcaa-b95fe6a5f0e7 > div > section > div > div.x-el.x-el-div.c1-1.c1-2.c1-19.c1-8x.c1-8y.c1-8z.c1-2a.c1-90.c1-91.c1-92.c1-b.c1-c.c1-93.c1-94.c1-95.c1-96.c1-d.c1-e.c1-f.c1-g > div > div > div:nth-child(1) > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-9m.c1-9n.c1-9o.c1-b.c1-c.c1-d.c1-e.c1-f.c1-g > div:nth-child(1) > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-19.c1-1a.c1-4.c1-77.c1-6h.c1-b.c1-c.c1-9s.c1-d.c1-e.c1-f.c1-g > div`).text().substring(1, 4));
  //   updatedPrices.renewActive6 = parseInt($(`#\\36 db5b7a2-9ea2-4ccd-bcaa-b95fe6a5f0e7 > div > section > div > div.x-el.x-el-div.c1-1.c1-2.c1-19.c1-8x.c1-8y.c1-8z.c1-2a.c1-90.c1-91.c1-92.c1-b.c1-c.c1-93.c1-94.c1-95.c1-96.c1-d.c1-e.c1-f.c1-g > div > div > div:nth-child(1) > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-9m.c1-9n.c1-9o.c1-b.c1-c.c1-d.c1-e.c1-f.c1-g > div:nth-child(2) > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-19.c1-1a.c1-4.c1-77.c1-6h.c1-b.c1-c.c1-9s.c1-d.c1-e.c1-f.c1-g > div`).text().substring(1, 4));
  //   updatedPrices.renewActive12 = parseInt($(`#\\36 db5b7a2-9ea2-4ccd-bcaa-b95fe6a5f0e7 > div > section > div > div.x-el.x-el-div.c1-1.c1-2.c1-19.c1-8x.c1-8y.c1-8z.c1-2a.c1-90.c1-91.c1-92.c1-b.c1-c.c1-93.c1-94.c1-95.c1-96.c1-d.c1-e.c1-f.c1-g > div > div > div:nth-child(1) > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-9m.c1-9n.c1-9o.c1-b.c1-c.c1-d.c1-e.c1-f.c1-g > div:nth-child(3) > div > div > div.x-el.x-el-div.c1-1.c1-2.c1-19.c1-1a.c1-4.c1-77.c1-6h.c1-b.c1-c.c1-9s.c1-d.c1-e.c1-f.c1-g > div`).text().substring(1, 4));
  //   updatedPrices.timestamp = Date.now()
  //   updatedPrices.updateMethod = `web`;
  //   ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
  //   refqmps.child(qmpID).update(updatedPrices)
  // } catch (err) { failures.push(err) }



  try {
    updatedPrices = {};
    stateID = 257
    qmpID = 120
    response = await axios.get('https://alohamedservices.com/rates-and-insurance/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#post-53 > div > div > div > div.et_pb_section.et_pb_section_2.et_section_regular > div > div.et_pb_column.et_pb_column_1_2.et_pb_column_2.et_pb_css_mix_blend_mode_passthrough > div.et_pb_module.et_pb_pricing_tables_0.et_pb_pricing.clearfix.et_pb_pricing_1.et_pb_no_featured_in_first_row > div > div > div.et_pb_pricing_content > ul > li:nth-child(5) > span`).text().substring(21, 24));
    updatedPrices.renewActive6 = parseInt($(`#post-53 > div > div > div > div.et_pb_section.et_pb_section_2.et_section_regular > div > div.et_pb_column.et_pb_column_1_2.et_pb_column_2.et_pb_css_mix_blend_mode_passthrough > div.et_pb_module.et_pb_pricing_tables_0.et_pb_pricing.clearfix.et_pb_pricing_1.et_pb_no_featured_in_first_row > div > div > div.et_pb_pricing_content > ul > li:nth-child(6) > span`).text().substring(18, 21));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 279
    qmpID = 133
    response = await axios.get('https://www.nexuspaincare.com/treatments/natural-treatments.php')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`body > section.card-area.single-service-area.section-padding-top.section-padding-bottom > div > div > div.col-lg-8 > div > div > div.card-body > p:nth-child(6)`).text().substring(119, 122));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 299
    qmpID = 147
    response = await axios.get('https://dragonhealthcare.net/medical-cannabis-evaluation/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#post-1382 > div.post-inner.thin > div > div.vc_row.wpb_row.vc_row-fluid.vc_custom_1633156825179.vc_row-o-content-top.vc_row-flex > div > div > div > div > div > div > div > div.wpb_text_column.wpb_content_element.vc_custom_1633155408896 > div > p:nth-child(1)`).text().substring(424, 427));
    updatedPrices.renewActive6 = parseInt($(`#post-1382 > div.post-inner.thin > div > div.vc_row.wpb_row.vc_row-fluid.vc_custom_1633156825179.vc_row-o-content-top.vc_row-flex > div > div > div > div > div > div > div > div.wpb_text_column.wpb_content_element.vc_custom_1633155408896 > div > p:nth-child(1)`).text().substring(474, 477));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }


  try {
    updatedPrices = {};
    stateID = 312
    qmpID = 153
    response = await axios.get('https://stgeorgeketamine.com/medical-cannabis/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#blog > div.main-container > div > div:nth-child(1) > section > div > div:nth-child(2) > ul > li:nth-child(1)`).text().substring(16, 19));
    updatedPrices.renewActive6 = parseInt($(`#blog > div.main-container > div > div:nth-child(1) > section > div > div:nth-child(2) > ul > li:nth-child(2)`).text().substring(10, 13));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 314
    qmpID = 155
    response = await axios.get('https://www.nancydavismedspa.com/weight-loss-programs.html')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`#layout > table > tbody > tr > td > div:nth-child(10) > table > tbody > tr > td > div > table > tbody > tr > td > table > tbody > tr > td > div > div > table:nth-child(2) > tbody > tr > td:nth-child(2) > p:nth-child(2)`).text().substring(299, 302));
    updatedPrices.renewActive6 = parseInt($(`#layout > table > tbody > tr > td > div:nth-child(10) > table > tbody > tr > td > div > table > tbody > tr > td > table > tbody > tr > td > div > div > table:nth-child(2) > tbody > tr > td:nth-child(2) > p:nth-child(2)`).text().substring(349, 352));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  try {
    updatedPrices = {};
    stateID = 321
    qmpID = 160
    response = await axios.get('https://astrahealthandwellness.com/services/')
    const $ = cheerio.load(response.data);
    updatedPrices.newPatient = parseInt($(`div.dm-service-section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(2) > em:nth-child(1)`).text().substring(10, 13));
    updatedPrices.renewActive6 = parseInt($(`div.dm-service-section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(4) > em:nth-child(1)`).text().substring(10, 13));
    updatedPrices.renewExpired = parseInt($(`div.dm-service-section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(6) > em:nth-child(1)`).text().substring(10, 13));
    updatedPrices.timestamp = Date.now()
    updatedPrices.updateMethod = `web`;
    ref.child(qmpID).update({ [yearMonthDay]: updatedPrices })
    refqmps.child(qmpID).update(updatedPrices)
  } catch (err) { failures.push(err) }

  console.log(failures)
  console.log(`end`)
}); 