const asyncHandler = require("express-async-handler");
const puppeteer = require("puppeteer");
const express = require("express");
const { linkLogger, linkErrorLogger } = require("../controllers/logger")

const getContact = asyncHandler(async (req, res) => {
  try {
    const url = req.body.data;

    const browser = await puppeteer.launch({ headless: "new" }); //localde bu çalışır
    //const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'], executablePath: '/usr/bin/chromium-browser' });

    const page = await browser.newPage();
    if (url.split("/", 5)[2] == 'play.google.com') {
      linkLogger.log('info', ' --Kullanıcı tarafından Google Play linki girildi.-- ')
      console.log("google play işlemleri")
      await page.goto(url);
      const header = await page.evaluate(() => {
        const headerElement = document.evaluate(
          '//*[@id="yDmH0d"]/c-wiz[2]/div/div/div[2]/div[1]/div/div/c-wiz/div[2]/div[1]/div/h1',
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        if (headerElement.singleNodeValue) {
          return headerElement.singleNodeValue.textContent;
        } else {
          return "Header not found";
        }
      });

      const innovations = await page.evaluate(() => {
        const innovationsElement = document.evaluate(
          '//*[@id="yDmH0d"]/c-wiz[2]/div/div/div[2]/div[2]/div/div[1]/div[1]/c-wiz[5]/section/div/div',
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );

        if (innovationsElement.singleNodeValue) {
          return innovationsElement.singleNodeValue.textContent;
        } else {
          return "Innovations not found";
        }
      });

      const dataSecurity = await page.evaluate(() => {
        const dataSecurityElement = document.evaluate(
          '//*[@id="yDmH0d"]/c-wiz[2]/div/div/div[2]/div[2]/div/div[1]/div[1]/c-wiz[3]/section/div',
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );

        if (dataSecurityElement.singleNodeValue) {
          return dataSecurityElement.singleNodeValue.innerHTML.split("<", 1)[0];
        } else {
          return "Data Security not found";
        }
      });

      // const descriptionElement = await page.$eval(".bARER", (str) => str.textContent);
      // const description = descriptionElement

      const description = await page.evaluate(() => {
        const descriptionElement = document.evaluate(
          '/html/body/c-wiz[2]/div/div/div[2]/div[2]/div/div[1]/div[1]/c-wiz[2]/div/section/div/div[1]',
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );

        if (descriptionElement.singleNodeValue) {
          return descriptionElement.singleNodeValue.textContent;
        } else {
          return "descriptionElement not found";
        }
      });

      const developerElement = await page.$eval(".auoIOc", (str) => str.textContent);
      const developer = developerElement

      const star = await page.$eval(".jILTFe", (str) => str.textContent);

      const ratingElement = await page.$eval(".EHUI5b", (str) => str.textContent);
      const rating = ratingElement.split(" ", 1)[0]

      // const develope2r = await page.evaluate(() => {
      //   const developerElement = document.evaluate(
      //     '/html/body/c-wiz[5]/div/div/div[2]/div[2]/div/div[1]/div[1]/c-wiz[4]/section/header/div/div[2]/button',
      //     document,
      //     null,
      //     XPathResult.FIRST_ORDERED_NODE_TYPE,
      //     null
      //   );

      //   if (developerElement.singleNodeValue) {
      //     return developerElement.singleNodeValue.textContent;
      //   } else {
      //     return "developerElement not found";
      //   }
      // });
      // console.log(develope2r)

      // await page.waitForXPath('//*[@id="ow9599"]/section/div/div[2]/div[5]/div/div/button/span')
      // const developer3 = await page.$x('//*[@id="ow9599"]/section/header/div/div[2]/button');
      // console.log(developer3)

      const allTextContents = await page.$$eval('.VfPpkd-vQzf8d', (elements) => elements.map((el) => el));
      console.log(allTextContents)

      const comments = await page.$$eval(".h3YV2d", (str) => {
        return str.map((x) => x.textContent)
      });

      const logo = await page.$eval(".nm4vBd", (img) => img.src);

      const images = await page.$$eval(".B5GQxf", (img) => {
        return img.map((x) => x.srcset.split(" ", 1))
      });

      res.status(200).json({ header: header, description: description, dataSecurity: dataSecurity, innovations: innovations, logo: logo, images: images, url: url, star: star, rating: rating, developer: developer, comments: comments });
      console.log({ header: header, description: description, dataSecurity: dataSecurity, innovations: innovations, logo: logo, images: images, url: url, star: star, rating: rating, developer: developer, comments: comments });
      linkLogger.log('info', ` --${header} uygulamasının bilgileri alındı ve sayfaya yönlendirildi!-- `)

      await browser.close();
    }
    else if (url.split("/", 5)[2] == 'apps.apple.com') {
      console.log("app store işlemleri")
      linkLogger.log('info', ' --Kullanıcı tarafından App Store linki girildi.-- ')
      await page.goto(url);

      const header = await page.evaluate(() => {
        const headerElement = document.evaluate(
          '/html/body/div[3]/main/div[2]/section[1]/div/div[2]/header/h1',
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );

        if (headerElement.singleNodeValue) {
          return headerElement.singleNodeValue.textContent.split("\n", 2)[1];
        } else {
          return "Header not found";
        }
      });

      const innovations = await page.evaluate(() => {
        const innovationsElement = document.evaluate(
          '/html/body/div[3]/main/div[2]/section[4]/div[2]/div[2]/div/div/p',
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );

        if (innovationsElement.singleNodeValue) {
          return innovationsElement.singleNodeValue.textContent;
        } else {
          return "Innovations not found";
        }
      });

      const description = await page.evaluate(() => {
        const descriptionElement = document.evaluate(
          '/html/body/div[3]/main/div[2]/section[3]/div/div/div/div',
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );

        if (descriptionElement.singleNodeValue) {
          return descriptionElement.singleNodeValue.textContent;
        } else {
          return "descriptionElement not found";
        }
      });

      const dataSecurity = await page.evaluate(() => {
        const dataSecurityElement = document.evaluate(
          '/html/body/div[3]/main/div[2]/section[6]/p[1]',
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );

        if (dataSecurityElement.singleNodeValue) {
          return dataSecurityElement.singleNodeValue.textContent;
        } else {
          return "Data Security not found";
        }
      });

      const logo = await page.$eval(".we-artwork--ios-app-icon source", (img) => img.srcset.split(" ", 2)[0]);

      const images = await page.$$eval(".we-artwork--screenshot-orientation-portrait source", (img) => {
        return img.map((x) => x.srcset.split(" ", 2)[0])
      });
      for (var i = 0; i < images.length; i++) {
        if (i % 2 !== 0) {
          images.splice(i, 2)
        }
      }

      res.status(200).json({ header: header, description: description, dataSecurity: dataSecurity, innovations: innovations, logo: logo, images: images, url: url });
      console.log({ header: header, description: description, innovations: innovations, dataSecurity: dataSecurity, logo: logo, images: images, url: url });
      linkLogger.log('info', ` --${header} uygulamasının bilgileri alındı ve sayfaya yönlendirildi!-- `)
    }
    else {
      logger.linkErrorLogger.log('error', ' --Kullanıcı tarafından yanlış link girildi!-- ')
      console.log("Yanlış link girildi!")
    }

  } catch (error) {
    linkErrorLogger.log('error', ' --Uygulama bilinmeyen bir hata ile karşılaştı-- ')
    console.error("An error occurred:", error);
    res.status(500).json({ error: error.message });
  }
});


const getContactFAV = asyncHandler(async (req, res) => {
  try {
    const url = req.body.data;
    console.log(url);
    const browser = await puppeteer.launch({ headless: "new" });
    //const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'], executablePath: '/usr/bin/chromium-browser' });
    const page = await browser.newPage();
    if (url.split("/", 5)[2] == 'play.google.com') {
      linkLogger.log('info', ' --Kullanıcı tarafından Google Play linki girildi.-- ')
      console.log("google play işlemleri")
      await page.goto(url);

      const header = await page.evaluate(() => {
        const headerElement = document.evaluate(
          '//*[@id="yDmH0d"]/c-wiz[2]/div/div/div[2]/div[1]/div/div/c-wiz/div[2]/div[1]/div/h1',
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );
        if (headerElement.singleNodeValue) {
          return headerElement.singleNodeValue.textContent;
        } else {
          return "Header not found";
        }
      });


      const logo = await page.$eval(".nm4vBd", (img) => img.src);


      res.status(200).json({ header: header, logo: logo, url: url });
      linkLogger.log('info', ` --${header} uygulamasının bilgileri alındı ve sayfaya yönlendirildi!-- `)

      await browser.close();
    }
    else if (url.split("/", 5)[2] == 'apps.apple.com') {
      console.log("app store işlemleri")
      linkLogger.log('info', ' --Kullanıcı tarafından App Store linki girildi.-- ')
      await page.goto(url);

      const header = await page.evaluate(() => {
        const headerElement = document.evaluate(
          '/html/body/div[3]/main/div[2]/section[1]/div/div[2]/header/h1',
          document,
          null,
          XPathResult.FIRST_ORDERED_NODE_TYPE,
          null
        );

        if (headerElement.singleNodeValue) {
          return headerElement.singleNodeValue.textContent.split("\n", 2)[1];
        } else {
          return "Header not found";
        }
      });


      const logo = await page.$eval(".we-artwork--ios-app-icon source", (img) => img.srcset.split(" ", 2)[0]);

      res.status(200).json({ header: header, logo: logo, images: images, url: url });
      linkLogger.log('info', ` --${header} uygulamasının bilgileri alındı ve sayfaya yönlendirildi!-- `)
    }
    else {
      logger.linkErrorLogger.log('error', ' --Kullanıcı tarafından yanlış link girildi!-- ')
      console.log("Yanlış link girildi!")
    }

  } catch (error) {
    linkErrorLogger.log('error', ' --Uygulama bilinmeyen bir hata ile karşılaştı-- ')
    console.error("An error occurred:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  getContact,
  getContactFAV
};
