import React, { Component } from 'react'
import PigDetail from './PigDetail'


export class PigsIndex extends Component {
    state = {
        showingDetail: false 
    }
    
    togglePigDetails = () => this.setState({showingDetail: !this.state.showingDetail})


    render() {
        let pigName = this.props.name.split(' ').join('_').toLowerCase()
        let pigImage = require(`../hog-imgs/${pigName}.jpg`) //how can we dynamically generate the filename?
      

        return (
            <div>
                <br></br>
                <img src={pigImage} />
                <h1>{this.props.name}</h1>
                <button onClick={this.togglePigDetails}>{this.state.showingDetail ? 'Hide Details' : 'Show Details' } </button>
                {this.state.showingDetail ? <PigDetail renderDetail={this.rednerDetail} pigs={this.props}/> : null }
                <br></br>
            </div>
        )
    }
}

export default PigsIndex
