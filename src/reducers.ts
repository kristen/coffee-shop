import { combineReducers } from "redux";
import coffeeShop, {CoffeeShopState} from "./CoffeeShop/reducers";

export interface RootState {
    coffeeShop: CoffeeShopState;
}

export default combineReducers<RootState>({
    coffeeShop,
});
