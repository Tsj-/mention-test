import * as React from "React";
import "./style.scss";


export class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li data-component="feed-item">
        <div className="aside">
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
}


