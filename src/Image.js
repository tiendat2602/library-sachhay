import React, { Component } from 'react';

export class Image extends Component {

	render() {

		return <img src={ process.env.PUBLIC_URL +"/images/1.jpg"} alt="another image from Image com" />
	}
}