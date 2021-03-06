import joinClassActionTypes from './class-types.js';

const INITIAL_STATE = {
	Classes:[]
}
const INITIAL_STATE_1 = {
	Classe:{}
}
export const loadClassReducer = (currentState = INITIAL_STATE_1, action = {}) => {

	switch (action.type) {
		case joinClassActionTypes.LOAD_CLASS:
			return ({
				...action.payload
			})
		default:
			return currentState;
	}
}
export const listclassReducer = (currentState = INITIAL_STATE, action = {}) => {

	switch (action.type) {
		case joinClassActionTypes.LIST_CLASS:
			return ({
				...action.payload
			})
		default:
			return currentState;
	}
}
