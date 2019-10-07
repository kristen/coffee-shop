import {CoffeeShopActions} from "./actions";
import {getType} from "typesafe-actions";
import * as actions from './actions';
import {combineReducers} from "redux";

export interface CoffeeShopState {
    orders: CoffeeOrder[];
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

export default combineReducers({
    orders,
});
