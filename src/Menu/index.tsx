import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../reducers";
import {getOrders} from "../CoffeeShop/selectors";
import {Dispatch} from "redux";
import * as actions from "../CoffeeShop/actions";
import {CoffeeShopActions} from "../CoffeeShop/actions";
import {MenuItems} from "../CoffeeShop/reducers";

interface OwnProps {
    menu: MenuItems;
}

type Props = OwnProps & ReturnType<typeof mapDispatchToProps>;

const Menu: React.FC<Props> = ({menu, orderCoffee}) => {
    return (
        <div className="menu">
            <div className="menu-title">
                Menu
            </div>
            <ul>
                {Object.keys(menu).map(coffee =>
                    <li className="item"
                        key={coffee}
                        onClick={() => orderCoffee(coffee)}>
                        {coffee}
                    </li>)
                }
            </ul>
        </div>
    )
};

const mapStateToProps = (state: RootState) => ({
    orders: getOrders(state),
});

const mapDispatchToProps = (dispatch: Dispatch<CoffeeShopActions>) => ({
    orderCoffee: (coffee: string) => dispatch(actions.orderCoffee(coffee))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
