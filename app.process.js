const express = require('express'),
          app = express(),
         path = require('path'),
         port = process.env.PORT || 3000;
app.get('/', (req,res) => res.sendFile(path.join(`${__dirname}/src/index.html`)));
app.use(express.static(`${__dirname}/src`));
app.listen(port, () => console.log(`App listening on port ${port}!`));