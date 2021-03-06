const Footer = (props) => (
  <div>
    <span>Made with ♥ by <a href="https://www.juan-gallo.com" target="_blank">Juani Gallo</a></span>
    <style jsx>{`
      div {
        text-align: center;
        color: #333;
        position: relative;
        top: 30px;;
        margin: auto;
        width: 100%;
      }
      span {
        width: 200px;
        margin: auto;
      }
      a {
        color: #2671bd;
        text-decoration: none;
      }
      @media(max-width: 1000px) {
        div {
          margin-bottom: 30px;
        }
      }
    `}</style>
  </div>
)

export default Footer