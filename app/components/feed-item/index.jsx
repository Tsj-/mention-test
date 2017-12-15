import * as React from "React";
import "./style.scss";
import { navigate } from "../../helpers/navigation-helper";
import moment from "moment";

export class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { size: "full" };
    this._renderImg = this._renderImg.bind(this);
    this._navigateToTwitter = this._navigateToTwitter.bind(this);
    this._renderMessage = this._renderMessage.bind(this);
    this._reduceMessage = this._reduceMessage.bind(this);
  }

  render() {
    return (
      <li data-component="feed-item">
        <div className="aside">
          {this._renderImg()}
          <div className={`dot ${!this.props.read ? "new" : ""}`} />
        </div>
        <div className="content">
          <div className="content-head">
            <a href={this.props.source_url}>{`@${this.props.source_name}`}</a>
            <span>{this.props.author_influence && <div className="dot" />}{moment(this.props.published_at).fromNow()}</span>
          </div>
          <div className="content-name">
            {this.props.twitter_real_name}
          </div>
          <div className="content-message" ref={`message-${this.props.id}`}>
            <a href={this.props.original_url}>{this._renderMessage()}</a>
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

  _renderMessage() {
    const { size } = this.state;
    switch (size) {
      case "full":
        return this.props.description;
      case "medium":
        return this.props.description_medium;
      case "short":
        return this.props.description_short;
      default:
        return this.props.description;
    }
  }


  // Display full description by default, and sorter the message if needed.
  _reduceMessage() {
    const elt = this.refs[`message-${this.props.id}`];
    if (elt.clientHeight > 58 || elt.clientWidth > 375) {
      const { size } = this.state;
      switch (size) {
        case "full":
          this.setState({ size: "medium" });
          break;
        case "medium":
          this.setState({ size: "short" });
          break;
        case "short":
        default:
          return;
      }
    }
  }

  componentDidMount() {
    this._reduceMessage();
  }

  componentDidUpdate() {
    this._reduceMessage();
  }
}


