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
      extraData: {},
      active: false
    });

    if (company.web) {
      newCompany.extraData.web = company.web;
    }

    if (company.twitter) {
      newCompany.extraData.twitter = company.twitter;
    }

    if (company.instagram) {
      newCompany.extraData.instagram = company.instagram;
    }
 
    return newCompany.save();
  }

  getCompany(name) {
    const query = Company.findOne({'name': name}).exec();

    return query;
  }
}

module.exports = CompanyService;