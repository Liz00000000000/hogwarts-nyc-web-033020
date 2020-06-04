import React, { Component } from 'react'

export class PigDetail extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    <li>{this.props.pigs.weight}</li>
                    <li>Specialty: {this.props.pigs.specialty}</li>
                    <li> {this.props.pigs.greased ? 'Greased' : 'Not Greased'}</li>
                    <li>Highest Medal Achieved: {this.props.pigs['highest medal achieved']}</li>
                </ul>
            </div>
        )
    }
}

export default PigDetail
