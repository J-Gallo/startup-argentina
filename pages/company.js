import React from 'react'
import Link from 'next/link'

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

    return {name: name};
  }

  render() {
    return(
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default Company;