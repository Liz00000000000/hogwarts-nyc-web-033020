import React, { Component } from 'react'

export class Filter extends Component {
 
    render() {
        return (
          <div className='simple-flex-row'>
                <select onChange={this.props.pigFilter}>
                <option name='all' value='all'>All</option>
                <option name='greased' value='greased'>Greased</option>
                <option name='not greased' value='not greased'>Not Greased</option>
                </select>
           </div>
        )
    }
}

export default Filter
