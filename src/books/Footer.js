import React, { Component } from 'react';

export class Footer extends Component {

	render() {
		return <footer className="footer d-flex align-content-center mb-5">
		    		<div className="mr-auto mt-4">
						<img src="" alt="sachhay.com"/>
						<p>© 2019 Sachhay.Com. All rights reversed </p>
					</div>
					<div className="ml-auto mt-4">
						<p>Liên hệ</p>
						<p>
							<i className="fa fa-phone mr-1"></i>
							086-824-9588
						</p>
					</div>
		</footer>
	}
}