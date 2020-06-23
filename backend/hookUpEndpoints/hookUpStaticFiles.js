const express = require('express');
const path = require('path');
const { WARD_PROGRAM_URL } = require('../endpoints/endpoints');

function hookUpStaticFiles(app) {

  const pathToFrontendDirectory = path.join(__dirname, '../../frontend');
  app.use(WARD_PROGRAM_URL, express.static(pathToFrontendDirectory))
}

module.exports = hookUpStaticFiles;