const { combineReducers } = require("redux");
const { productReducer, selectedProductReducer } = require("./productReducer");

const reducers = combineReducers({
	allProducts: productReducer,
	product: selectedProductReducer,
});

export default reducers;
