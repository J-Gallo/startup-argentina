import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../config'

class Company extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({req, query}) {
    let name;

    if (req) {
      name = req.params.id;
    } else {
      name = query.id;
    }

    const baseUrl = config.baseUrl()(process.env.NODE_ENV),
      responseJson = await fetch(baseUrl + '/api/company/' + name),
      json = await responseJson.json();

    return {company: json};
  }

  render() {
    return(
      <div>
        <Header />
        <div className="startup-container">
          <div className="startup-header">
            <div className="startup-logo">
              <img src={this.props.company.logo} />
            </div>
            <div className="startup-name">
              <h1>{this.props.company.name}</h1>
            </div>
          </div>
          <div className="startup-description-container">
            <div className="startup-description">
              <h2>Descripción</h2>
              <p>{this.props.company.description}</p>
            </div>
            {Object.keys(this.props.company.extraData).length > 0 &&
              <div className="startup-extra-data">
                <ul>
                  {Object.keys(this.props.company.extraData).map((data, i) => {
                    const value = this.props.company.extraData[data];
                    return(
                        <li key={i}>{data} : {value}</li>
                    )
                  })}  
                </ul>
              </div>
            }
          </div>
        </div>
        <Footer />        

        <style jsx>{`
          .startup-container {
            max-width: 1100px;
            min-width: 1100px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            background-color: #fff;
            min-height: 600px;
            margin-top: 20px;
            border: 1px solid #f1f1f1;
          }
          .startup-header {
            display: flex;
            height: 160px;
            width: 100%;
            flex-wrap: wrap;
            background-color: #2671bd;
          }
          .startup-logo {
            background-color: #fff;
            width: 150px;
            height: 150px;
            display: flex;
            align-items: center;
            margin-left: 10px;
            justify-content: center;
            padding: 10px;
            margin: 20px 10px 0 30px;
            border: 2px solid #f1f1f1;
            border-radius: 5px;
          }
          .startup-logo img {
            max-width: 130px;
            max-height: 130px;
            margin: 10px;
          }
          .startup-name {
            margin-top: auto;
            color: #FFF
          }
          .startup-name h1 {
            margin-bottom: 10px;
            color: #efe6e6;
            font-weight: 200;
            cursor: default;
          }
          .startup-description-container {
            display: flex;
            width: 100%;
            min-height: 400px;
          }
          .startup-description {
            width: 60%;
            padding: 10px 10px 10px 30px;
            margin-bottom: 30px;            
          }
          .startup-extra-data {
            width: 40%;
            border-left: 1px solid #cecece;
            margin-bottom: 30px;
          }
          .startup-extra-data ul {
            list-style: none;
            padding: 0 0 0 20px;
            font-size: 14px;
          }
          .startup-extra-data ul li {
            margin-bottom: 10px;
            text-transform: uppercase;
          }
        `}</style>
        <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #f6f6f6;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          }
        `}</style>
      </div>
    )
  }
}

export default Company;