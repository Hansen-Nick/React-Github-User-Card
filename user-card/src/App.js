import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserCard from './Components/userCard'
import FollowerList from './Components/FollowerList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followerData: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/hansen-nick')
      .then( res => {
        console.log(res);
        this.setState({userData: res.data})
        console.log(this.state.userData)
      })
      .catch( (err) => console.log(err))

    axios.get('https://api.github.com/users/hansen-nick/followers')
      .then( res => {
        this.setState({followerData: res.data})
      })
      .catch( err => console.log('nh: App.js: componentDidMount: followers:', err))
  }
  
  render() {
    return (
      <div className="App">
       <UserCard data={this.state.userData} />
       <FollowerList followerData={this.state.followerData} />
      </div>
    );
  }
}

export default App;
