const asyncHandler = require("express-async-handler");
const puppeteer = require("puppeteer");
const express = require("express");

const getContact = asyncHandler(async (req, res) => {
  try {
    const id = req.body;
    console.log(id);
    const url = `https://play.google.com/store/apps/details?id=${id}`;
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(url);

   
    
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
      return "innovations not found";
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
          return dataSecurityElement.singleNodeValue.textContent;
        } else {
          return "data Security not found";
        }
      });

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
      return "header not found";
    }
  });

    const description = await page.evaluate(() => {
      const descriptionElement = document.evaluate(
        '//*[@id="yDmH0d"]/c-wiz[2]/div/div/div[2]/div[2]/div/div[1]/div[1]/c-wiz[2]/div/section/div/div[1]',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      );

      if (descriptionElement.singleNodeValue) {
        return descriptionElement.singleNodeValue.textContent;
      } else {
        return "Description not found";
      }
    });
   

    res.status(200).json({ description: description,header:header,dataSecurity:dataSecurity,innovations:innovations });

    await browser.close();
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  getContact
};
