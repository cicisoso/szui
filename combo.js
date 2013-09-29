var combo   = require('combohandler'),
    express = require('express'),
    app = express();
// Return a 400 response if the combo handler generates a BadRequest error.
//app.use(combo.errorHandler);

// Given a root path that points to a YUI 3 root folder, this route will
// handle URLs like:
//
// http://example.com/yui3?build/yui/yui-min.js&build/loader/loader-min.js
//
app.get('/', combo.combine({rootPath: './src/css'}), combo.respond);

app.listen(3000);