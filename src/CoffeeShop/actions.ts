import {ActionType, createAction, createStandardAction} from "typesafe-actions";

export const orderCoffee = createStandardAction('coffee-shop/ORDER').map((coffee: string, time: number) => ({
    payload: {
        coffee,
        timeLeft: time,
    }
}));

export const tick = createAction('coffee-shop/TICK');

export type CoffeeShopActions = ActionType<typeof orderCoffee | typeof tick>;
