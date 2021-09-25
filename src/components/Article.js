import React, { Component } from 'react'
import Grid from './Grid'
import List from './List'

export default class Article extends Component {


    render() {
        return (
            <>
            {
                this.props.typeAffichage === 1 ?
                    <Grid srcImg={this.props.srcImg} title={this.props.title} />
                :
                    <List srcImg={this.props.srcImg} title={this.props.title} />
            }
              
            </>
        )
    }
}
