import { combineReducers } from "redux";
import board, {BoardState} from './board/reducers';
import coffeeShop, {CoffeeShopState} from "./CoffeeShop/reducers";

export interface RootState {
    board: BoardState;
    coffeeShop: CoffeeShopState;
}

export default combineReducers<RootState>({
    board,
    coffeeShop,
});
