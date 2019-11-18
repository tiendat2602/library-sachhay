import React, { Component } from 'react';
import { loadData } from './data/ActionCreator';
import { connect } from 'react-redux';
import { dataTypes } from './data/Types';

const mapStateToProps = (storeData) => ({
	...storeData
})

const mapDispatchToProps = {
	loadData
}

export const StoreConnector = connect(mapStateToProps, mapDispatchToProps)(
	class InnerStoreConnector extends Component {

		render() {
			if(!this.props.categories) {
				return <h1> no data </h1>
			} else {

				return <div>
				{ this.props.categories.map(cat =>
					<h6 key={cat}>{cat}</h6>) }
				</div>
			}
		}

		componentDidMount() {
			this.props.loadData(dataTypes.CATEGORIES);
			this.props.loadData(dataTypes.BOOKS);
		}
	}

	)

