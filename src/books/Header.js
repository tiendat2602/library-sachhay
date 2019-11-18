import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuCategories } from './MenuCategories';

export class Header extends Component {

	render() {
		return <nav className="navbar navbar-expand-sm pb-5 pt-5 mb-5">
  					<Link className="navbar-brand" to="/">
  						Sachhay.com
  					</Link>

  					<button className="navbar-toggler text-dark" type="button" 
  						data-toggle="collapse" data-target="#collapsibleNavbar">
    					<span className="navbar-toggler-icon"></span>
  					</button>

  					<div className="collapse navbar-collapse" id="collapsibleNavbar">
    					<ul className="navbar-nav">
					      <li className="nav-item">
					        <Link className="nav-link" to="/">Trang Chủ</Link>
					      </li>
					      <li className="nav-item dropdown">
					      	<a className="nav-link dropdown-toggle" href="#" 
					      		id="navbardrop" data-toggle="dropdown">
					        Thể Loại
					      	</a>
						    <div className="dropdown-menu">
						        <MenuCategories categories={this.props.categories} />
						    </div>
					   	 </li>
					     <li className="nav-item dropdown">
					      <a className="nav-link dropdown-toggle" href="#" 
					      	id="navbardrop1" data-toggle="dropdown">
					        Thông Tin
					      </a>
					      <div className="dropdown-menu">
					      	<Link className="dropdown-item" to="/infomation/first">Lời nói đầu</Link>
					      	<Link className="dropdown-item" to="/infomation/second">Bản quyền</Link>
					      	<Link className="dropdown-item" to="/infomation/third">Liên hệ</Link>
					      </div>
					     </li>
					     <li className="nav-item">
					     	<Link to="/admin" className="nav-link">
					     		Quản Trị
					     	</Link>
					     </li>
    					</ul>
					    <form className="form-inline ml-auto">
						    <div className="input-group">
						      <input type="text" className="form-control" placeholder="Search" />
						      <div className="input-group-append">
						      	    <button className="btn btn-primary" type="submit">
						      	    	<i className="fas fa-search-location"></i>
						      	    </button>
						      </div>
						    </div>
					  	</form>
  					</div>
				</nav>
		}
}