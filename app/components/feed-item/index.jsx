import * as React from "React";
import "./style.scss";
import { navigate } from "../../helpers/navigation-helper";

export class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this._renderImg = this._renderImg.bind(this);
    this._navigateToTwitter = this._navigateToTwitter.bind(this);
  }

  render() {
    return (
      <li data-component="feed-item">
        <div className="aside">
          {this._renderImg()}
          <div className={`dot ${!this.props.read ? "new" : ""}`}/>
        </div>
        <div className="content">
            <div className="content-head">
            </div>
            <div className="content-name">
            </div>
            <div className="content-message">
            </div>
          </div>
      </li>
        );
  }

  _renderImg() {
    return (
      <div className="img-handler">
          <img src={this.props.picture_url} />
          <img className="twitter" src="http://icons.iconarchive.com/icons/sicons/basic-round-social/512/twitter-icon.png" onClick={this._navigateToTwitter} />
        </div>);
  }

  _navigateToTwitter() {
          navigate(this.props.source_url)
        }
        }


