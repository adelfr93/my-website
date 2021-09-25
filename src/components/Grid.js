import React , { Component } from 'react'

export default class Grid extends Component {

    render(){
        return (
        
            <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card" >
                        <img src={this.props.srcImg} className="card-img-top" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                        </div>
                    </div>
                </div>
        )
    }
}
