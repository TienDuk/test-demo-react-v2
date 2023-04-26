//class component 
// funtions component

import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'bui van dat',
        adress: 'Ha Noi',
        age: 18,
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and my adress is {this.state.adress}
            </div>
        )
    }
}
export default MyComponent; 