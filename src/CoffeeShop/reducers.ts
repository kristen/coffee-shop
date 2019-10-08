import * as actions from "./actions";
import {CoffeeShopActions} from "./actions";
import {getType} from "typesafe-actions";
import {combineReducers} from "redux";

export interface MenuItems {
    [coffee: string]: number
}

export interface Orders {
    coffeeOrders: CoffeeOrder[];
    currentCoffee: CoffeeOrder|null;
    completedOrders: CoffeeOrder[];
}

export interface CoffeeShopState {
    orders: Orders;
    menu: MenuItems;
    currentTime: number;
}

export interface CoffeeOrder {
    type: string;
    timeLeft: number;
}

const initialState: Orders = {
    coffeeOrders: [],
    completedOrders: [],
    currentCoffee: null,
};

export const orders = (state: Orders = initialState, action: CoffeeShopActions): Orders => {
    switch (action.type) {
        case getType(actions.orderCoffee):
            const {coffee, timeLeft} = action.payload;
            const updatedOrders = [...state.coffeeOrders, {type: coffee, timeLeft}];
            console.log('current state', state);
            console.log('updatedOrders', updatedOrders);
            const newState = {...state, ...{coffeeOrders: updatedOrders}};
            console.log('newState', newState);
            return newState;
        case getType(actions.tick):
            if (state.currentCoffee && state.currentCoffee.timeLeft) {
                const updatedCoffee = {...state.currentCoffee, timeLeft: state.currentCoffee.timeLeft-1};
                return {...state, ...{currentCoffee: updatedCoffee}};
            } else {
                // finish making coffee, add to finish and start next coffee
                const newCoffeeOrder = state.coffeeOrders[0];
                const updatedCoffeeOrders = state.coffeeOrders.slice(1, state.coffeeOrders.length);
                if (state.currentCoffee) {
                    return {...state, ...{
                            currentCoffee: newCoffeeOrder,
                            completedOrders: [...state.completedOrders, state.currentCoffee],
                            coffeeOrders: updatedCoffeeOrders,
                        }};
                } else {
                    return {...state, ...{
                            currentCoffee: newCoffeeOrder,
                            coffeeOrders: updatedCoffeeOrders,
                        }};
                }
            }
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
    currentTime,
});
