import * as React from "React";
import './style.scss';
import { FeedItem } from "../feed-item/index.jsx";


export class FeedDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.load();
  }

  render() {
    const { mentions } = this.props;
    return (
      <ul data-component="feed">

        {mentions.map(mention => {
          return <FeedItem key={mention.id} {...mention} />;
        })}

      </ul>
    );
  }
}


