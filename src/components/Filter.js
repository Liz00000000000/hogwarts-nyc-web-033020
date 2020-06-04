import React, { Component } from 'react'

export class Filter extends Component {
    state = {
        filter: 'all'
    }

    filterChange = (e) => {
        this.setState({filter: e.target.value})
    }

    render() {
        console.log(this.props)
        return (
          <div className='simple-flex-row'>
                <select onChange={this.filterChange}>
                <option name='all' value='all'>All</option>
                <option name='greased' value='greased'>Greased</option>
                <option name='not greased' value='not greased'>Not Greased</option>
                </select>
           </div>
        )
    }
}

export default Filter
