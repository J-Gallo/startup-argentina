import React from 'react'
import Link from 'next/link'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import 'isomorphic-fetch'
import config from '../config'

class Items extends React.Component {

  static async getInitialProps({req, query}) {
    const baseUrl = config.baseUrl()(process.env.NODE_ENV),
      responseJson = await fetch(baseUrl + '/api/cards'),
      json = await responseJson.json();

    return {cards: json}
  }
  
  render() {
    return(
      <div>
        <Header />
        <div className="startup-container">
          {this.props.cards.map((card, i) => {
            const companyUrl = '/startup/' + card.formattedName,
              pageUrl = '/company?id=' + card.formattedName;

            return (
              <Link prefetch key={i} href={pageUrl} as={companyUrl}>
                <div>
                  <Card image={card.logo} name={card.name} description={card.description} />
                </div>
              </Link>
            )
          })}
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