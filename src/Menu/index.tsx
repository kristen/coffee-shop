import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../reducers";
import {Dispatch} from "redux";
import * as actions from "../CoffeeShop/actions";
import {CoffeeShopActions} from "../CoffeeShop/actions";
import {MenuItems} from "../CoffeeShop/reducers";
import "./index.css";

interface OwnProps {
    menu: MenuItems;
}

type Props = OwnProps & ReturnType<typeof mapDispatchToProps>;

const Menu: React.FC<Props> = ({menu, orderCoffee}) => {
    const handleOrderCoffee = (coffee: string) => {
        const timeLeft = menu[coffee];
        orderCoffee(coffee, timeLeft);
    };
    return (
        <div className="menu">
            <div className="menu-title">
                Menu
            </div>
            <ul>
                {Object.keys(menu).map(coffee =>
                    <li className="item"
                        key={coffee}
                        onClick={() => handleOrderCoffee(coffee)}>
                        {coffee}
                    </li>)
                }
            </ul>
        </div>
    )
};

const mapStateToProps = (state: RootState) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<CoffeeShopActions>) => ({
    orderCoffee: (coffee: string, timeLeft: number) => dispatch(actions.orderCoffee(coffee, timeLeft))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
