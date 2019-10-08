import {RootState} from "../reducers";
import {createSelector} from "reselect";
import {CoffeeShopState} from "./reducers";

const getCoffeeShop = (state: RootState) => state.coffeeShop;
export const getOrders = createSelector(getCoffeeShop, (coffeeShop: CoffeeShopState) => coffeeShop.orders);
export const getMenu = createSelector(getCoffeeShop, (coffeeShop: CoffeeShopState) => coffeeShop.menu);
export const getCompletedOrders = createSelector(getCoffeeShop, (coffeeShop: CoffeeShopState) => coffeeShop.completedOrders);
export const getCurrentTime = createSelector(getCoffeeShop, (coffeeShop: CoffeeShopState) => coffeeShop.currentTime);
