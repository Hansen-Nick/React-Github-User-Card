import React, {Component} from 'react';

class FollowerCard extends Component {
  render() {
    return(
      <div className="card">
        <div className="card">
          <div className="card-info">
            <h3 className="name">{this.props.follower.name}</h3>
            <p className="username">{this.props.follower.login}</p>
          </div>
        </div>
        <img src={this.props.follower.avatar_url} />
      </div>
    )
  }
}

export default FollowerCard