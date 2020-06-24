const {
  CANARY_URL,
  GET_WARD_DATA_URL,
} = require('../endpoints/endpoints');

const canaryController = require('../controllers/canaryController');
const getWardDataController = require('../controllers/getWardDataController');

const listThatMatchesUrlToController = [{
  controller: canaryController,
  url: CANARY_URL,
}, {
  controller: getWardDataController,
  url: GET_WARD_DATA_URL,
}];

function hookUpApiEndpoints(app) {
  listThatMatchesUrlToController.forEach(function(matchUp){
    const { controller, url } = matchUp;
    app.get(url, controller);
  })
}


module.exports = hookUpApiEndpoints;