import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PaginationControls } from '../PaginationControls';
import { BookPageConnector } from './BooksPageConnector';

const BooksPages = BookPageConnector(PaginationControls);

export class BooksList extends Component {

	clickHandle = (ev,book) => {
		ev.preventDefault();
		this.props.readBook(book.id);
		this.props.history.push(`/readbook/${book.title}`);
	}

	render() {
		if(!this.props.books) {
			 return <div> No Data </div>
		} else {
			return 	<div className="col-md-9 align-self-stretch">
					<div className="card maincard">
				 	<div className="card-header bg-primary text-white text-center font-weight-bold">
				 		{this.props.match.params.category}
				 	</div>
				 	<BooksPages />
				 	<div className="card-body">
				 		<div className="row">
				 			{this.props.books.map(book =>
								<div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3" 
									 key={book.title}>
								      <img className="card-img-top img-thumbnail" alt="Card image"
								      	src={book.bookImage} />
								      <div className="card-body text-center">
								        <a className="stretched-link" href="#"
								        	onClick={(ev) => this.clickHandle(ev,book)}>
								        	{book.title}
								        </a>
								      </div>
								 </div>
				 				)}
				 		</div>
				 	</div>
				</div>
			</div>
		}
	}
}