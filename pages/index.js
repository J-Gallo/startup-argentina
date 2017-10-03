import React from 'react'
import Link from 'next/link'
import Card from '../components/Card'
import Footer from '../components/Footer'
import HeadTag from '../components/Head'
import Header from '../components/Header'
import 'isomorphic-fetch'
import config from '../config'

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }

    this.handleFilter = this.handleFilter.bind(this);
  }
  static async getInitialProps({req, query}) {
    let page;

    if (req) {
      page = req.query['page'] ? req.query['page'] : 1;
    } else {
      page = query.page;
    }
    const baseUrl = config.baseUrl()(process.env.NODE_ENV),
      responseJson = await fetch(baseUrl + '/api/cards?page=' + page),
      json = await responseJson.json();

    return {cards: json}
  }
  
  handleFilter(text) {
    this.setState({
      search: text.toLowerCase()
    })
  }
  render() {
    return(
      <div>
        <HeadTag />
        <Header autocomplete="true" filterText={this.handleFilter}/>
        <div className="startup-container">
          {this.props.cards.map((card, i) => {
            const companyUrl = '/startup/' + card.formattedName,
              pageUrl = '/company?id=' + card.formattedName;

            let logo;
            if (card.logo == undefined || card.logo == '') {
              card.logo = '/static/default_logo.png'
            }
            return (
              <div className="startup-card-container" key={i}>
                {card.name.toLowerCase().indexOf(this.state.search) > -1 &&
                  <Link prefetch key={i} href={pageUrl} as={companyUrl}>
                  <div>
                    <Card image={card.logo} name={card.name} description={card.description} />
                  </div>
                </Link>
                }
              </div>
            )
          })}
        </div>
        <Footer />        
        <style jsx>{`
          .startup-container {
            max-width: 1000px;
            min-width: 1000px;
            margin: 20px auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          @media(max-width: 1000px) {
            .startup-container {
              width: 100%;
              min-width: 0;
            }
            .startup-card-container {
              width: 100%;
            }
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

export default Items;