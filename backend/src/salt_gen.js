const bcrypt = require("bcrypt");
const { salt } = require("./config.json");
// bcrypt.genSalt(Math.floor(Math.random() * 1000) + 1).then(console.log);
bcrypt.hash("" /* pw */, 12).then(console.log);
bcrypt.compare("" /*plaintext pw */, "" /*hash*/).then(console.log);
