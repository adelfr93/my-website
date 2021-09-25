import React, { Component } from 'react'
import Article from './Article';

export default class SectionArticles extends Component {

    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            articles : [],
            typeAffich : 1
        }
        this.changeViewGrid = this.changeViewGrid.bind(this)
        this.changeViewList = this.changeViewList.bind(this)
    }

    componentDidMount(){
        const url = "https://jsonplaceholder.typicode.com/photos?_limit=" + this.props.limit;

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                  this.setState({
                    isLoaded: true,
                    articles: result
                  });
                },
                
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
    }


    changeViewGrid(e){
        e.preventDefault()
        this.setState({ typeAffich : 1  });
    }

    changeViewList(e){
        e.preventDefault()
        this.setState({ typeAffich : 2  });
    }

   
    render() {
        const { error, isLoaded, articles, typeAffich } = this.state;
        if (error) {
        return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Chargement…</div>;
        } else {
            return (
                <div className="container mt-5 mb-5">
                    <div className="row justify-content-end mb-4">
                        <div className="col-md-3 col-sm-6 text-end">
                            <button id="grid" className="btn" disabled={typeAffich === 1} onClick={this.changeViewGrid}><i class="fa fa-th"></i></button>
                            <button id="list" className="btn" disabled={typeAffich === 2} onClick={this.changeViewList}><i class="fa fa-list"></i></button>
                        </div>
                    </div>
                    <div className="row">

                            {  
                                (this.props.onSearch) ? 
                                 articles.filter(article => (article.title.includes(this.props.onSearch))).map(article => (
                                    <Article key={article.id} srcImg={article.url} title={article.title} typeAffichage={this.state.typeAffich}  />
                                ))
                                :
                                articles.map(article => (
                                    <Article key={article.id} srcImg={article.url} title={article.title} typeAffichage={this.state.typeAffich}  />
                                ))
                            }

                    </div>
                </div>
            )
        }
    }
}
