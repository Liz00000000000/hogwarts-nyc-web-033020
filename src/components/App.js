import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Filter from './Filter.js'
import Radio from './Radio.js'


class App extends Component {
  state = {
    pigs: [...hogs],
    filter: 'all',
    sorted: ' '
  }


filterChange = (e) => {
    this.setState({filter: e.target.value})
    if (this.state.filter === 'all'){
      this.setState({pigs: [...hogs] })
    } else if (this.state.filter === 'greased') {
      let greasedPigs = hogs.filter(pig => pig.greased === true)
      this.setState({ pigs: greasedPigs})
    } else if (this.state.filter === 'not greased'){
      let notGreasedPigs = hogs.filter(pig => pig.greased === false)
      this.setState({ pigs: notGreasedPigs})
    }
}

sortPigs = (event) => {
  this.setState({sorted: event.target.value})
  if (this.state.sorted === 'name'){
      let sortedByName = this.state.pigs.sort((a, b) => a.name > b.name ? 1 : -1 )
      this.setState({pigs: sortedByName})
  } else if (this.state.sorted == 'weight'){
    let sortedByWeight = this.state.pigs.sort((a, b) => a.weight > b.weight ? 1 : -1 )
    this.setState({pigs: sortedByWeight})
  }
}


  render() {
    return (
      <div className="App">
        <Nav />
        <Radio handleSort={this.sortPigs}/>
        <Filter pigFilter={this.filterChange} />
        <HelloWorld pigs={this.state.pigs} />
      </div>
    );
  }
}

export default App;
