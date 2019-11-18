import React, { Component } from "react";
import { dataTypes } from "../data/Types";

export class DataGetter extends Component {

    render() {
        return <div className="row mb-5"> 
                    { this.props.children } 
            </div>
    }

    componentDidMount = () => {
        console.log("DataGetter did mount");
        this.getData();
    }

    componentDidUpdate = () => {
        console.log("DataGetter did update");
        this.getData();
    }
    
    getData = () => {
        const dsData = this.props.books_params || {} ;
        const rtData = {
            _limit: this.props.pageSize || 5,
            _sort: this.props.sortKey || "Title",
            _page: this.props.match.params.page || 1,
            cateName_like: (this.props.match.params.category || "") === "Tất Cả" 
                ? "" : this.props.match.params.category
        }        
        
        if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
            this.props.loadData(dataTypes.BOOKS, rtData);      
        }
    }
}