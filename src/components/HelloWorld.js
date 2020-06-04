import React, { Fragment } from "react";
import PigsIndex from "./PigsIndex";


class HelloWorld extends React.Component {
  render() {
    console.log(this.props.pigs)
    return (
      <div>
        <h1>Hello World</h1>
        {this.props.pigs.map(pig => <PigsIndex key={pig.name} {...pig} />)}  
      </div>
    );
  }
}

export default HelloWorld;
