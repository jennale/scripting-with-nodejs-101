#!/usr/bin/env node

const popup = require("website-popup");

const url = "https://www.fast.com";

popup(url, { width: 600, height: 400 })
  .then(() => {
    console.log("Dialog closed");
  })
  .catch(err => {
    console.error(err);
  });

//We could even take it further by using a headless browser like phantomJS and grabbing the DIV from the site, and printing it into the terminal.
