import React , { Component } from 'react'

export default class List extends Component {

    render(){
        return (
            <div className="col-sm-12 mb-4 d-flex flex-wrap align-items-center justify-content-between">
                <div className="col-sm-4" >      
                    <img src={this.props.srcImg} className="card-img-top" alt="image" />
                </div>
                <div className="col-sm-7 mt-4 mt-sm-0">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                </div>
                </div>
        )

    }
  
}
