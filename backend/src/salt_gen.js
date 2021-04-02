const bcrypt = require("bcrypt");
// bcrypt.genSalt(Math.floor(Math.random() * 1000) + 1).then(console.log);
// bcrypt.hash("" /* pw */, 12).then(console.log);
bcrypt
	.compare(
		"khpYIhFMYDisjlsrpiZhuReH" /*plaintext pw */,
		"$2b$12$SujEGFnw49NwW2Sv0PIXXOeWXwTe4jHmtZqCC.Oi8iQk6PO/BH9R." /*hash*/
	)
	.then(console.log);
