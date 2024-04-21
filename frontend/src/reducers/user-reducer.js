import { ROLE } from '../constants';
import { ACTION_TYPE } from '../actions';

const initialUserState = {
	id: null,
	login: null,
	password: null,
	roleId: ROLE.GUEST,
	session: null,
	// registeredAt: null,
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER:
			return {
				...state,
				...action.payload,
			};

		case ACTION_TYPE.LOGOUT:
			return initialUserState;

		default:
			return state;
	}
};
