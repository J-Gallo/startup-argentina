const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const companyController = require('./controllers/CompanyController'),
  companyService = require('./services/CompanyService');

const companyInstance = new companyController(new companyService());

app.prepare() 
.then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  
  // server.get('/items/:id', (req, res) => {
  //   return app.render(req, res, '/product' , req.query)
  // });

  server.get('/api/cards', (req, res) => companyInstance.getCards(req, res));
  server.post('/api/company', (req, res) => companyInstance.addCompany(req, res));

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  let mongoUrl;
  if (process.env.NODE_ENV != "production") {
    mongoUrl = config.mongo()(process.env.NODE_ENV) + '/startups-argentina';    
  } else {
    mongoUrl = "mongodb://" + process.env.MONGO_USER + ":" + process.env.MONGO_PWD + "@" + process.env.MONGO_HOST + ":" + process.env.MONGO_PORT + "/" + process.env.MONGO_NAME;
  }

  mongoose.connect(mongoUrl, function(err, res) {
    if(err) {
      console.log('ERROR: connecting to Database. ' + err);
    }

    console.log('Database connected');

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    })
  });
});