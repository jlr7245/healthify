const bcrypt = require('bcryptjs');

const models = require('../db/models/index');


//uses bcrypt to compare passwords
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}
