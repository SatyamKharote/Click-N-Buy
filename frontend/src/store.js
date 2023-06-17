import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer
} from "./reducers/ProductReducer.js";
import { cartReducer } from "./reducers/CartReducer.js";
import { userListReducer, userLoginReducer } from "./reducers/UserReducer.js";
import { userRegisterReducer } from "./reducers/UserReducer.js";
import { userDetailsReducer } from "./reducers/UserReducer.js";
import { userUpdateProfileReducer } from "./reducers/UserReducer.js";
import { userDeleteReducer } from "./reducers/UserReducer.js";
import { userUpdateReducer } from "./reducers/UserReducer.js";

import {
  orderCreateReducer,
  orderDetailReducer,
  orderPayReducer,
  orderListMyReducer
} from "./reducers/OrderReducer.js";
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage
  },
  userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
