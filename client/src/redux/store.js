import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cartReducer} from './reducers/cartReducers';
import {getProducDetailsReducer, getProductsReducer} from './reducers/productReducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts:getProducDetailsReducer,
    getProductDetails:getProducDetailsReducer
})

const middleware = [thunk];

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;