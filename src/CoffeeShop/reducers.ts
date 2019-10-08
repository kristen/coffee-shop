import {CoffeeShopActions} from "./actions";
import {getType} from "typesafe-actions";
import * as actions from './actions';
import {combineReducers} from "redux";

export interface MenuItems {
    [coffee: string]: number
}

export interface CoffeeShopState {
    orders: CoffeeOrder[];
    menu: MenuItems;
}

export interface CoffeeOrder {
    type: string;
}

export const orders = (state: CoffeeOrder[] = [], action: CoffeeShopActions) => {
    switch (action.type) {
        case getType(actions.orderCoffee):
            const {coffee} = action.payload;
            return [...state, {type: coffee}];
        default:
            return state;
    }
};

const initialState = {
    mocha: 5,
    chai: 4,
    cappuccino: 3,
    americano: 2,
    espresso: 1,
};

export const menu = (state: MenuItems = initialState, action: CoffeeShopActions) => {
    return state;
};

export default combineReducers({
    orders,
    menu,
});
