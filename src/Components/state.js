import React, { Component } from 'react';



class StateApp extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changemessage(){
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    render() {

        return (
            <div className="App">
                <div>
                    <p>
                        <h1>
                            {this.state.message}
                        </h1>
                    </p>
                    <button onClick={() => this.changemessage()}>Subscribe</button>
                </div>
            </div>
        )
    }
}

export default StateApp;
