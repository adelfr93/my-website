import React from 'react'
import { Component } from 'react'
import FilterArticles from '../FilterArticles'
import SectionArticles from '../SectionArticles'
import './OurArticles.css'

export default class OurArticles extends Component {

    constructor (props){
        super(props)
        this.state = {
            inputSearch : ''
        }
        this.handleChangeSearch = this.handleChangeSearch.bind(this)
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
    }

    handleChangeSearch(e){
        e.preventDefault()
        this.setState({ inputSearch : e.target.value });
    }

    handleSubmitSearch(e){
        this.setState({ inputSearch : e.target.value });
    }

    render(){
        return (
            <>
                <div className="container">
                    <h1 className="text-center mt-4">Our articles</h1>
                    <FilterArticles onChangeSearch={this.handleChangeSearch} onSubmitSearch={this.handleSubmitSearch} />
                    <SectionArticles limit="500" onSearch={this.state.inputSearch} />
                </div>
            </>
        )
    }
}
