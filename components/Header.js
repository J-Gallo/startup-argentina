import Link from 'next/link'
import Autocomplete from './Autocomplete'

const Header = () => (
  <header>
    <div className="startup-wrapper">
      <div className="startup-logo">
        <Link prefetch href='/index' as='/'>
          <span>STARTUP ARGENTINA</span>
        </Link>
      </div>
      <Autocomplete />
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
    `}</style>
  </header>
)

export default Header