"use strict";
const Q = require('q');

class CompanyController {
  constructor(companyService) {
    this.companyService = companyService;
  }

  getCards(req, res) {
    const page = req.query['page'] ? req.query['page'] : 1;

    this.companyService.getCards(page).then((items) => {
      return res.json(items);
    })
  }

  addCompany(req, res) {
    if (req.body && req.body.name && req.body.description && req.body.mail) {
      this.companyService.addCompany(req.body).then(() => {
        return res.sendStatus(200)
      }).catch((err) => {
        console.log(err);
        if (err.code = 11000) {
          return res.json({
            status: 200,
            msg: 'Company already exists'
          })
        }
        return res.sendStatus(500);
      })
    } else {
      return res.sendStatus(400);
    }
  }

  getCompany(req, res) {
    const name = req.params.id;

    if (name) {
      this.companyService.getCompany(name).then((company) => {
        if (company != null) {
          return res.json(company);          
        } else {
          return res.sendStatus(404);
        }
      }).catch((err) => {
        return res.sendStatus(500);
      })
    }
  }
}

module.exports = CompanyController;
