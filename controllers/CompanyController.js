"use strict";
const Q = require('q');

class CompanyController {
  constructor(companyService) {
    this.companyService = companyService;
  }

  getCards(req, res) {
    this.companyService.getCards().then((items) => {
      return res.json(items);
    })
  }

  addCompany(req, res) {
    if (req.body && req.body.name && req.body.logo && req.body.description) {
      this.companyService.addCompany(req.body).then(() => {
        return res.sendStatus(200)
      }).catch((err) => {
        console.log(err);
        return res.sendStatus(500);
      })
    } else {
      return res.sendStatus(400);
    }
  }
}

module.exports = CompanyController;
