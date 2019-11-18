import { actionTypes } from './Types';

export const BooksReducer = (storeData, action) => {

	switch(action.type) {
		case actionTypes.LOAD_DATA:
			return {
				...storeData, 
				[action.payload.dataType]: action.payload.data,
				[`${action.payload.dataType}_total`]: action.payload.total,
				[`${action.payload.dataType}_params`]: action.payload.params
			};
		case actionTypes.SET_DATA_SORT_PROPERTY :
			return {...storeData, sortKey: action.payload};
		case actionTypes.SET_DATA_PAGESIZE_PROPERTY:
			return {...storeData, pageSize: action.payload};
		case actionTypes.START_READ_BOOKS:
			return {...storeData, selectedId: action.payload};
		default:
			return storeData || {};
	}
}