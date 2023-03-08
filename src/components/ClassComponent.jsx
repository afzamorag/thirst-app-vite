import React, { Component } from 'react'

export class ClassComponent extends Component {

    constructor() {
        super()
        this.state = {
            name: 'Girlesa',
            country: 'Colombia'
        }
        this.changeName = this.changeName.bind(this)
    }

    changeName() {
        if (this.state.name === 'Girlesa') this.setState({ name: 'Julieth' })
        else this.setState({ name: 'Girlesa' })
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <button onClick={this.changeName}>Change name</button>
            </div>
        )
    }
}

export default ClassComponent