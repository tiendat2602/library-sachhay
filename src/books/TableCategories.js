import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TableCategories extends Component {

	render() {
		return <div className="jumbotron">
				<h2 className="text-center">Thư Viện Ebook Miễn Phí</h2>
				<p className="text-center pb-2">
				Thư viện Sachhay.Com là dự án phi lợi nhuận,
				nhằm mục đích chia sẻ sách và đọc truyện online miễn phí vì cộng đồng. 
				</p>
				<hr />
				<ul className="row" style={{listStyleType:"none"}}>
					{this.props.categories.map(cat => 
						<li className="col-12 col-sm-6 col-md-4" key={cat.cate_name}>
							<Link to={`/${cat.cate_name}`}>
								<i className="fa fa-book mr-1"></i>
								{cat.cate_name}
							</Link>
						</li>)}
				</ul>
				<p className="text-center">
					<Link to="/Tất Cả" className="btn btn-lg btn-outline-primary">
						Tất Cả Sách
					</Link>
				</p>
		</div>
	}
}