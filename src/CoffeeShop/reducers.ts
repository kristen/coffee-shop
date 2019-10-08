import {CoffeeShopActions} from "./actions";
import {getType} from "typesafe-actions";
import * as actions from './actions';
import {combineReducers} from "redux";

export interface MenuItems {
    [coffee: string]: number
}

export interface CoffeeShopState {
    orders: CoffeeOrder[];
    completedOrders: CoffeeOrder[];
    menu: MenuItems;
    currentTime: number;
}

export interface CoffeeOrder {
    type: string;
    timeLeft: number;
}

export const orders = (state: CoffeeOrder[] = [], action: CoffeeShopActions) => {
    switch (action.type) {
        case getType(actions.orderCoffee):
            const {coffee, timeLeft} = action.payload;
            return [...state, {type: coffee, timeLeft}];
        default:
            return state;
    }
};

const initialMenu = {
    mocha: 5,
    chai: 4,
    cappuccino: 3,
    americano: 2,
    espresso: 1,
};

export const menu = (state: MenuItems = initialMenu, action: CoffeeShopActions) => {
    return state;
};

export const completedOrders = (state: CoffeeOrder[] = [], action: CoffeeShopActions) => {
    return state;
};

const initialTime = 0;

export const currentTime = (state: number = initialTime, action: CoffeeShopActions) => {
    switch (action.type) {
        case getType(actions.tick):
            return state + 1;
        default:
            return state;
    }
};

export default combineReducers({
    orders,
    menu,
    completedOrders,
    currentTime,
});
