import React, { Component } from 'react';


class ChildComp extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.passfunc('yoyo')}>Click me...!</button>
            </div>
        )
    }
}

export default ChildComp
