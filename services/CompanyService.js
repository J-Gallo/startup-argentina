"use strict";

const Q = require('q'),
  mongoose = require('mongoose'),
  companyModel = require('../models/company'),
  Company = mongoose.model('Company');

class CompanyService {
  constructor() {
    this._pageSize = 20;
  }

  getCards(page) {
    let offset = (page - 1) * this._pageSize;

    const query = Company.find({'active': true}).sort({'_id': -1}).skip(offset).limit(this._pageSize).exec();

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
      if (company.web.indexOf("http") == -1) {
        company.web = 'http://' + company.web 
      }

      newCompany.extraData.web = company.web;
    }

    if (company.twitter) {
      if (company.twitter.indexOf("http") == -1) {
        company.twitter = 'http://' + company.twitter 
      }
      newCompany.extraData.twitter = company.twitter;
    }

    if (company.instagram) {
      if (company.instagram.indexOf("http") == -1) {
        company.instagram = 'http://' + company.instagram 
      }
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