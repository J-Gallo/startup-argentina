import Link from 'next/link'
import Autocomplete from './Autocomplete'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(text) {
    this.props.filterText(text);
  }

  render() {
    return(
      <header>
        <div className="startup-wrapper">
          <div className="startup-logo">
            <Link prefetch href='/index' as='/'>
              <span>STARTUP ARGENTINA</span>
            </Link>
          </div>
          {this.props.autocomplete == "true" &&
            <Autocomplete onFilterTextInput={this.handleFilter}/>
          }
          <div className="startup-actions">
            <Link href="/add" as='/agregar'>
              <span>Agregar startup</span>
            </Link>
          </div>
        </div>
        <style jsx>{`
          header {
            position: relative;
            width: 100%;
            height: 54px;
            top: 0;
            background-color: #24292e;
            z-index: 10;
          }
          .startup-wrapper {
            max-width: 1100px;
            margin: auto;
            height: 100%;
          }
          .startup-logo {
            height: 100%;
            cursor: pointer;
            display: inline-block;
            float: left;
          }
          .startup-logo span {
            color: #FFF;
            font-size: 20px;
            line-height: 54px;
          }
          .startup-actions {
            display: inline-block;
            float: right;
            margin-right: 10px;
          }

          .startup-actions span {
            line-height: 54px;
            color: #dad0d0;
            cursor: pointer;
            font-weight: lighter;
            letter-spacing: 1px;
          }
          .startup-actions span:hover {
            text-decoration: underline;
          }
        `}</style>
      </header>
    )
  }
}

export default Header