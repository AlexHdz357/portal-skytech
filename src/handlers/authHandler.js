const { login } = require('../controllers/authController');
const path = require('path');

const loginHandler = (req, res) => {
  const { username, password } = req.body;
  const employee = login(username, password);

  if (employee) {
    res.redirect(`/welcome.html?name=${encodeURIComponent(employee.name)}`);
  } else {
    res.sendFile(path.join(__dirname, '../../public/error.html'));
  }
};

const getLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/login.html'));
};

module.exports = { loginHandler, getLoginPage };
