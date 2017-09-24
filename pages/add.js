import React from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import 'isomorphic-fetch'
import config from '../config'

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      name: '',
      logo: '',
      mail: '',
      description: '',
      web: '',
      twitter: '',
      instagram: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
    
  }

  async handleSubmit(event) {
    event.preventDefault();
    let status;
    const responseJson = await fetch('/api/company', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    
    if (responseJson.status == 200) {
      status = 'ok';
      this.setState({
        status: status,
        name: '',
        logo: '',
        description: '',
        web: '',
        twitter: '',
        instagram: ''
      })
    } else if (responseJson.status == 400) {
      status = '400';
      this.setState({
        status: status
      })
    } else {
      status = '500';
      this.setState({
        status: status
      })
    }
  }

  render() {
    return(
      <div>
        <Header />
          {this.state.status == 'ok' && 
            <div className="startup-response-ok">Startup creada correctamente</div>
          }
          {this.state.status == '400' && 
            <div className="startup-response-error">Por favor completa todos los datos requeridos</div>
          }
          {this.state.status == '500' && 
            <div className="startup-response-error">Lo sentimos, tuvimos un error al crear la startup.</div>
          }
          <div className="startup-container">
              <form className="startup-add-form" onSubmit={this.handleSubmit}>
                <div className="startup-form-field">
                  <span>Nombre</span>
                  <input type="text" onChange={this.handleChange.bind(this)} value={this.state.name} name="name" placeholder="Nombre" />
                </div>
                <div className="startup-form-field">
                  <span>Logo</span>                  
                  <input type="text" onChange={this.handleChange.bind(this)} value={this.state.logo} name="logo" placeholder="Logo" />
                </div>
                <div className="startup-form-field">
                  <span>Mail</span>                
                  <input type="text" onChange={this.handleChange.bind(this)} value={this.state.mail} name="mail" placeholder="Mail" />
                </div>
                <div className="startup-form-field">
                  <span>Descripción</span>                
                  <textarea onChange={this.handleChange.bind(this)} value={this.state.description} name="description"></textarea>
                </div>
                <div className="startup-form-field">
                  <span>Web</span>                
                  <input type="text" onChange={this.handleChange.bind(this)} value={this.state.web} name="web" placeholder="Web (opcional)" />
                </div>
                
                <div className="startup-form-field">
                  <span>Twitter</span>                
                  <input type="text" onChange={this.handleChange.bind(this)} value={this.state.twitter} name="twitter" placeholder="Twitter (opcional)" />
                </div>
                <div className="startup-form-field">
                  <span>Instagram</span>                
                  <input type="text" onChange={this.handleChange.bind(this)} value={this.state.instagram} name="instagram" placeholder="Instagram (opcional" />
                </div>
                <input type="submit" value="Enviar" className="startup-cta-button" />
              </form>
          </div>
        <Footer />        
        <style jsx>{`
          .startup-response-ok {
            max-width: 1080px;
            min-width: 1080px;
            margin: 10px auto;;
            height: 35px;
            background-color: #2671bd;
            border-radius: 5px;
            padding: 10px;
            line-height: 35px;
            color: #FFF;
          }
          .startup-response-error {
            max-width: 1080px;
            min-width: 1080px;
            margin: 10px auto;;
            height: 35px;
            background-color: #c33f3f;
            border-radius: 5px;
            padding: 10px;
            line-height: 35px;
            color: #FFF;
          }
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
          .startup-form-field {
            width: 250px;
            margin: 20px;
          }
          .startup-form-field span {
            display: block;
            margin-bottom: 5px;
            margin-left: 3px;
          }
          .startup-form-field input {
            display: block;
            width: 100%;
            height: 35px;
            border-radius: 5px;
            background-color: #FFF;
            outline: 0 none;
            padding: 0 10px;
            border: 1px solid #d2d2d2;
            color: #111;
          }
          .startup-form-field textarea {
            width: 250px;
            border-radius: 5px;
            border: 1px solid #d2d2d2;
            height: 80px;
            padding: 10px;
            outline: 0 none;
          }
          .startup-cta-button {
            margin: 20px;
            width: 272px;
            border-radius: 5px;
            background-color: #0084E0;
            height: 40px;
            text-align: center;   
            cursor: pointer;      
            color: #FFF;
            border: none;
            font-size: 14px;
          }
          .startup-cta-button:hover {
            background-color: #026eb9;
          }                     

        `}</style>
        <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #f6f6f6;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
          }
          ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #bfbfbf;
          }
          ::-moz-placeholder { /* Firefox 19+ */
            color: #bfbfbf;
          }
          :-ms-input-placeholder { /* IE 10+ */
            color: #bfbfbf;
          }
          :-moz-placeholder { /* Firefox 18- */
            color: #bfbfbf;
          }
        `}</style>
      </div>
    )
  }
}

export default Add;