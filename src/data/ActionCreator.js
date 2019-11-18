import { actionTypes } from './Types';
//import { data as phData } from './PlaceholderData';
import { RestDataSource } from './RestDataSource';

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => ({
	type: actionTypes.LOAD_DATA,
	payload: dataSource.getData(dataType, params)
				.then(response => 
					({	dataType, 
						data: response.data,
						total:Number(response.headers["x-total-count"]),
						params
					})
				)
})

export const readBook = (selectedId) => ({
	type: actionTypes.START_READ_BOOKS,
	payload: selectedId
})

export const setSortProperty = (newProp) => ({
	type:actionTypes.SET_DATA_SORT_PROPERTY,
	payload: newProp
})

export const setPageSize = (newSize) => ({
	type: actionTypes.SET_DATA_PAGESIZE_PROPERTY,
	payload: newSize
})