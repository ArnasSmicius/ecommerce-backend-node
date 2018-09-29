const express = require('express');
const app = express();

module.exports = function() {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}...`));
}