import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Filter from './Filter.js'


class App extends Component {
  state = {
    pigs: [...hogs]
  }

  render() {

    let allPigs = this.state.pigs
    console.log(this.state)

    return (
      <div className="App">
        <Nav />
        <Filter pigFilter={this.state.pigs} />
        <HelloWorld pigs={this.state.pigs} />
      </div>
    );
  }
}

export default App;
