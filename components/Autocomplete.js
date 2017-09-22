import React from 'react'
import Router from 'next/router'

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
        value: ''
    }
  }   

  handleKeyPress(event) {
    if (event.key == 'Enter') {
        this.search();
    }
  }

  handleChange(event) {
    this.setState({
        value: event.target.value
    });
  }

  search() {
      const query = this.state.value;
  }

  render() {
    return(
      <div>
        <div className="startup-autocomplete-form">
          <input onKeyPress={this.handleKeyPress} 
            value={this.state.value} 
            onChange={this.handleChange} 
            type="text" 
            placeholder="Buscar" 
            className="startup-autocomplete"
            name="search"
          />
        </div>
        <style jsx>{`
          div {
            display: inline-block;
          }
          .startup-autocomplete-form {
              padding: 7px 5px;
              overflow: auto;
              height: 40px;
              left: 89px;
              width: 300px;
              display: inline-block;
              margin-left: 20px;
          }
          .startup-autocomplete {
              padding: 5px 60px 5px 15px;
              border-radius: 3px;
              box-sizing: border-box;
              border: none;
              width: 100%;
              height: 30px;
              margin-top: 5px;
              font-size: 14px;
              background-color: grey;
              outline: 0 none;
              color: white;
          }
          ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #afaeae;
          }
          ::-moz-placeholder { /* Firefox 19+ */
            color: #afaeae;
          }
          :-ms-input-placeholder { /* IE 10+ */
            color: #afaeae;
          }
          :-moz-placeholder { /* Firefox 18- */
            color: #afaeae;
          }
        `}</style>
      </div>
    )
  }
}

export default Autocomplete