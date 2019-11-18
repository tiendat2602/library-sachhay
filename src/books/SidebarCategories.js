import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SidebarCategories extends Component {

	render() {
		return <div className="col-md-3 align-self-stretch">
					<div className="card sidebar-card">
    				<div className="card-header text-white text-center bg-primary font-weight-bold">
    					Thể Loại Sách
    				</div>
    				<div className="card-body">
					    <ul className="row" style={{listStyleType:"none"}}>
							<li className="col-12">
									<Link to="/Tất Cả">
										<i className="fa fa-book mr-1"></i>
										Tất Cả
									</Link>
							</li>
							{this.props.categories.map(cat => 
								<li className="col-12" key={cat.cate_name}>
									<Link to={`/${cat.cate_name}`}>
										<i className="fa fa-book mr-1"></i>
										{cat.cate_name}
									</Link>
								</li>)}
							</ul>
					</div>
				</div>
			</div>
	}
}