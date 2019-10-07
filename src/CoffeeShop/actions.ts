import {ActionType, createStandardAction} from "typesafe-actions";

export const orderCoffee = createStandardAction('coffee-shop/ORDER').map((coffee: string) => ({
    payload: {
        coffee,
    }
}));

export type CoffeeShopActions = ActionType<typeof orderCoffee>
