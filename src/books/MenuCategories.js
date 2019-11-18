import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MenuCategories extends Component {

	render() {

		return <>
				<Link to="/Tất Cả"
					className="dropdown-item"> 
				Tất Cả
				</Link>
				{ this.props.categories.map(cat =>
						<Link to={`/${cat.cate_name}`} key={cat.cate_name}
						className="dropdown-item">
							{cat.cate_name}
						</Link>
				)}
		</>
	}
} 

