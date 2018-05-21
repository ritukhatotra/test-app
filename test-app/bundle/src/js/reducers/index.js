const initialState = { 
	articles: []
};

const rootReducer = {state = initialState, action} => {
	switch(action.type)
		case 'ADD_ARTICLE':
			state.articles.push(payload);
			break;
		default:
			return state;
};

export default rootReducer;