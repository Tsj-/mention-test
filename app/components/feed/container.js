import { connect } from 'react-redux'
import {FeedDisplay} from './display-component.jsx'
import {fetchMentionsIfNeeded} from "../../actions/mention-actions"


const mapStateToProps = state => {
    const {mentions} = state;
  return {
   mentions:mentions.list,
   user:state.user
  }
}


const mapDispatchToProps = dispatch => {
    return {
      load:() => {
        dispatch(fetchMentionsIfNeeded())
      }
    }
  }

export const Feed = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedDisplay)