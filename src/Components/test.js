import React from 'react';



// function Hellow (){
//     return <h1>Hellow world</h1>
// }

const Hellow = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.children}</p>
        </div>
    )

}



export default Hellow;