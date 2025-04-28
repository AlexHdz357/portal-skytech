const employees = require('../db/employees');

const login = (username, password) => {
  return employees.find(emp => emp.username === username && emp.password === password);
};

module.exports = { login };
