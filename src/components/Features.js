import React, { Component } from 'react';

class Features extends Component {
  
  render(){
    return (

      <div className="row text-center">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img className="card-img-top" src={this.props.images.original.url} alt=""/>
            <div className="card-body">
              <h4 className="card-title" key={this.props.index}>{this.props.title}</h4>
            </div>
          </div>
        </div>    
      </div>
    );
  }
    
}
export default Features;