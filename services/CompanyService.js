"use strict";

const Q = require('q'),
  mongoose = require('mongoose'),
  companyModel = require('../models/company'),
  Company = mongoose.model('Company');

class CompanyService {
  constructor() {
    this._pageSize = 20;
  }

  getCards() {
    const query = Company.find({'active': true}).sort({'_id': -1}).limit(this._pageSize).exec();

    return query;
  }

  addCompany(company) {
    let newCompany = new Company({
      name: company.name,
      formattedName: encodeURI(company.name),
      mail: company.mail,      
      logo: company.logo,
      description: company.description,
      extraData: {
        web: company.web ? company.web : "",
        twitter: company.twitter ? company.twitter : "",
        instagram: company.instagram ? company.instagram : ""
      },
      active: false
    });

    return newCompany.save();
  }

  getCompany(name) {
    const query = Company.findOne({'name': name}).exec();

    return query;
  }
}

module.exports = CompanyService;