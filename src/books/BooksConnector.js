import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { loadData, readBook } from '../data/ActionCreator';
import { connect } from 'react-redux';
import { dataTypes } from '../data/Types';
import { Header } from './Header';
//import { Books } from './Books';
import { Footer } from './Footer';
import { TableCategories } from './TableCategories'
import { DataGetter } from '../data/DataGetter';
import { BooksList } from './BooksList';
import { SidebarCategories } from './SidebarCategories';
import { BookDetail } from './BookDetail';
import { Infomation } from './Infomation';

const mapStateToProps = (storeData) => ({
	...storeData
})

const mapDispatchToProps = {
	loadData,readBook
}


export const BooksConnector = connect(mapStateToProps, mapDispatchToProps)(
	class InnerBooksConnector extends Component {

		render() {

			if(!this.props.categories || this.props.categories.length === 0) {
				return <h1> No Data </h1>
			} else {
				return <div className="container">
					<Header {...this.props}/>
					<div className="alert alert-success" role="alert">
						<b>NÊN</b> sao chép, chia sẻ, <b>KHÔNG NÊN</b> thương mại hoá.
					</div>
					<Switch>
						<Redirect from="/:category"
							to="/:category/1" exact={ true } />
						<Route path="/" exact={ true } render={(routeProps) =>
							<TableCategories categories={this.props.categories} />} />
						<Route path="/readbook/:title" exact = { true } 
							render = {(routeProps) => 
								<BookDetail {...this.props} />} />
						<Route path="/infomation/:order"
							render={ (routeProps) => 
								<Infomation {...this.props} {...routeProps} />} />
			 			<Route path="/:category/:page"
			 				render={(routeProps) => 
					 					<DataGetter {...this.props} {...routeProps} >
					 						<BooksList {...this.props} {...routeProps} />
						 					<SidebarCategories {...this.props} {...routeProps} />
					 					</DataGetter>
			 					} />
					</Switch>
					<Footer />
				</div>
			}
			
		}

		componentDidMount() {
			this.props.loadData(dataTypes.CATEGORIES);
		}
	}
)