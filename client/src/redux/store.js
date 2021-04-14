import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cartReducer} from './reducers/cartReducers';
import {getProducDetailsReducer, getProductsReducer} from './reducers/productReducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts:getProductsReducer,
    getProductDetails:getProducDetailsReducer,
})

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage
    }
}

const store = createStore(reducer,INITIAL_STATE,composeWithDevTools(applyMiddleware(...middleware)));

export default store;