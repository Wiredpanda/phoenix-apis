const bcrypt = require('bcrypt');

const getSalt = () => bcrypt.genSaltSync(10);

const getHash = (text, salt) => {
  salt = (!salt) ? bcrypt.genSaltSync(10) : salt;
  return bcrypt.hashSync(text, salt);
};

const isValid = (text, hash) => bcrypt.compareSync(text, hash);

module.exports = {
  getHash,
  isValid,
  getSalt,
};