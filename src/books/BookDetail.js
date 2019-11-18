import React, { Component } from 'react';
import { SidebarCategories } from './SidebarCategories';


export class BookDetail extends Component {

	createMarkup = (str) => {
 	    return {__html: str };
					}

	render() {
		if(!this.props.books) {
			return <div className="row mb-5">
				<div className="col-md-9">
					no books
				</div>
			<SidebarCategories categories={this.props.categories} />

			</div>
		} else {
			return <div className="row mb-5">
				<div className="col-md-9">
					{this.props.books.filter(book => 
						book.id === this.props.selectedId).map(b => 
						<div className="container" key={b.title}>
							<div className="row" style={{alignItems:"stretch"}}>
								<div className="col-3">
								<img className="img-thumbnail" alt="Card image"
									 style={{width:"100%",height:"100%"}}
									  src={b.bookImage}/>
								</div>
								<div className="col-9">
									<h1>{b.title}</h1>
									<h5> 
										Tác giả: {b.author}
									</h5>
									<h5> 
										Thể Loại: {b.cateName}
									</h5>
								</div>
							</div>
							<div className="row" style={{borderTop: "1px solid #e5e5e5"}}>
								<h3>Giới thiệu:</h3>
								<div dangerouslySetInnerHTML={this.createMarkup(b.description)} />
							</div>
						</div>)
					}
				</div>
				<SidebarCategories categories={this.props.categories} />
			</div>
		}
	}
}
