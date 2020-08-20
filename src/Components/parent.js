import React, { Component } from 'react';
import ChildComp from './child'

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message:'World'
        }
    
    }

    Myfunc(child){
        alert(`hellow from parent ${this.state.message} from ${child}`)
        console.log(child)
    }
    
    render() {
        return (
            <div>
                <ChildComp passfunc={(child) => this.Myfunc(child)} />
            </div>
        )
    }
}

export default ParentComp
