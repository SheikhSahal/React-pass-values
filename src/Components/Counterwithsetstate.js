import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    changevalue() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                Counter <h1> {this.state.counter}</h1>
                <button onClick={() => this.changevalue()}>
                    increament
                </button>
            </div>
        )
    }
}

export default Counter
