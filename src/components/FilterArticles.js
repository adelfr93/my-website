import React, { Component } from 'react'

export default class FilterArticles extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitSearch}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" onChange={this.props.onChangeSearch} />
                </div>
            </form>
        )
    }
}
