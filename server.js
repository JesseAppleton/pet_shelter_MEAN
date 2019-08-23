const express = require('express'),
      DB_NAME = "animals_db",
         port = 8000,
           bp = require('body-parser'),
          app = express();

app.use(express.static(__dirname + "/public/dist/public"));
app.use(bp.json());

require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.all('*', (req, res, next) => {
  res.sendFile(__dirname + "/public/dist/public/index.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});