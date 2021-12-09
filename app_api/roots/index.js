const express = require('express');
const router = express.Router();

const CcruiseShips = require('../controllers/cruiseShips');
const Caccounts = require('../controllers/accounts');

router
    .route('/cruiseShips')
    .get(CcruiseShips.checkAirLine)
router
    .route('/Accounts')
    .post(Caccounts.createAccount);

module.exports = router;