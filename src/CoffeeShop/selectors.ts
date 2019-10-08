import {RootState} from "../reducers";
import {createSelector} from "reselect";
import {CoffeeShopState, Orders} from "./reducers";

const getCoffeeShop = (state: RootState) => state.coffeeShop;
const getOrders = createSelector(getCoffeeShop, (coffeeShop: CoffeeShopState) => coffeeShop.orders);
export const getCoffeeOrders = createSelector(getOrders, (orders: Orders) => orders.coffeeOrders);
export const getCurrentCoffee = createSelector(getOrders, (orders: Orders) => orders.currentCoffee);
export const getCompletedOrders = createSelector(getOrders, (orders: Orders) => orders.completedOrders);
export const getMenu = createSelector(getCoffeeShop, (coffeeShop: CoffeeShopState) => coffeeShop.menu);
export const getCurrentTime = createSelector(getCoffeeShop, (coffeeShop: CoffeeShopState) => coffeeShop.currentTime);
