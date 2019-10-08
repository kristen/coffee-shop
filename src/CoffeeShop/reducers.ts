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
            return {...state, ...{coffeeOrders: updatedOrders}};
        case getType(actions.tick):
            const updatedCompletedOrders = state.completedOrders.map(order => {
                return {
                    ...order,
                    timeLeft: order.timeLeft-1, // decrement time when finished and filter out ones that are -3 seconds
                }
            }).filter(order => order.timeLeft > -3);
            if (state.currentCoffee && state.currentCoffee.timeLeft) {
                const updatedCoffee = {...state.currentCoffee, timeLeft: state.currentCoffee.timeLeft-1};
                return {...state, ...{currentCoffee: updatedCoffee, completedOrders: updatedCompletedOrders}};
            } else {
                // start next coffee since timeLeft is 0 or there is no current coffee
                const newCoffeeOrder = state.coffeeOrders[0];
                const updatedCoffeeOrders = state.coffeeOrders.slice(1, state.coffeeOrders.length);
                if (state.currentCoffee) {
                    // if there was a current coffee that was finished, add it to completed orders
                    return {...state, ...{
                            currentCoffee: newCoffeeOrder,
                            completedOrders: [...updatedCompletedOrders, state.currentCoffee],
                            coffeeOrders: updatedCoffeeOrders,
                        }};
                } else {
                    return {...state, ...{
                            currentCoffee: newCoffeeOrder,
                            completedOrders: updatedCompletedOrders,
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
