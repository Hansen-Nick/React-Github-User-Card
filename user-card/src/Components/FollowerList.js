import React, {Component} from 'react';
import FollowerCard from './FollowerCard'

class FollowerList extends Component {
  render() {
    return(
      <div>
        {this.props.followerData.map( (follower, index) => <FollowerCard key={index} follower={follower} />
        )}
      </div>
    )
  }
}

export default FollowerList