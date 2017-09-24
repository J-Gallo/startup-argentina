import Link from 'next/link'

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="startup-card">
        <div className="startup-logo">
          <img src={this.props.image} />
        </div>
        <div className="startup-data">
          <div className="startup-name">
            <span>{this.props.name}</span>
          </div>
          <div className="startup-description">
            <p>{this.props.description}</p>
          </div>
        </div>
        <style jsx>{`
          .startup-card {
            width: 528px;
            height: 150px;
            border: 1px solid #e5e5e5;
            border-bottom: 2px solid #cecece;
            background-color: #fff;
            display: flex;
            border-radius: 5px;
            margin: 10px;
            cursor: pointer;
          }
          .startup-logo {
            width: 100px;
            height: 150px;
            display: flex;
            align-items: center;
            margin-left: 10px;
          }
          .startup-logo img {
            width: 100px;
            max-height: 100%;
          }
          .startup-data {
            display: inline-block;
            flex: auto;
            margin: 20px 20px 10px 10px;
            width: 388px;
            
          }
          .startup-data .startup-name {
            font-weight: bold;
          }
          .startup-data .startup-description {
            margin: 0;
            padding: 0;
            white-space: pre-line;
          }
          .startup-data .startup-description p {
            line-height: 20px;
            display: block; /* Fallback for non-webkit */
            display: -webkit-box;
            max-width: 100%;
            max-height: 20pxt * 4; /* Fallback for non-webkit */
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}</style>
      </div>
    )
  }
}

export default Card