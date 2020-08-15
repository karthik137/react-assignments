import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: "Kirito"
  }

  userNameHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  }

  render() {

    return(
      <div className="App">
        <UserInput username={this.state.username} usernameChangeEvent = {this.userNameHandler}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;