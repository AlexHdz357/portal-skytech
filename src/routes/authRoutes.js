const express = require('express');
const { loginHandler, getLoginPage } = require('../handlers/authHandler');

const router = express.Router();

router.get('/', getLoginPage);
router.post('/login', loginHandler);

module.exports = router;
