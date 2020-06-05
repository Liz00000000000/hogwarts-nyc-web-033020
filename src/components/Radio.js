import React, { Component } from 'react'

export class Radio extends Component {
    render() {
        return (
            <div onClick={event => this.props.handleSort(event)}>
                <button type='radio' value='weight'>Sort By Weight</button>
                <button type='radio' value='name'>Sort By Name</button>
            </div>
        )
    }
}

export default Radio
