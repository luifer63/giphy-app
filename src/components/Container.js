import React, { Component } from 'react';
import Features from './Features';

class Container extends Component {

    render(){
        return (
            <div className="container">
                <Features {...this.props}/>
            </div>
        );

    }
    
}
export default Container;