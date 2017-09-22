import React, { Component } from 'react';
import fire from './fire';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {doctor: "",
                  open_this_week: ""};
  }

  componentWillMount() {
    var ref = fire.database().ref();
    console.log(ref);
    ref.on("value", snapshot => {
      this.setState({doctor: snapshot.val().doctor,
                     open_this_week: snapshot.val().open_this_week})
      // this.setState({doctor: snapshot.val().doctor});
      console.log(this.state);
    }, function(err) {
      console.log("Error! Error code is: " + err.code);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The doctor this week is {this.state.doctor}
        </p>
        <p className="App-intro">
          The clinic will be {this.state.open_this_week} this week.
        </p>
      </div>
    );
  }
}

export default App;
