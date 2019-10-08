import React from 'react';
import {RootState} from "../reducers";
import {getCoffeeOrders, getCurrentCoffee} from "../CoffeeShop/selectors";
import {connect} from "react-redux";
import {CoffeeOrder} from "../CoffeeShop/reducers";

interface OwnProps {
    coffeeOrders: CoffeeOrder[];
    currentCoffee: CoffeeOrder|null;
}

type Props = OwnProps

const Orders: React.FC<Props> = ({coffeeOrders, currentCoffee}) => {
    return (
        <div>
            <div className="menu">
                <div className="menu-title">
                    Orders
                </div>
                <ul>
                    {coffeeOrders.map(({type, timeLeft}, index) =>
                        <li className="item" key={index}>
                            {type}: {timeLeft}
                        </li>
                    )}
                    {coffeeOrders.length ? '' : <div className="empty-orders">No orders</div>}
                </ul>
            </div>
            {currentCoffee ?
                <div className="current-order">
                    <div>Currently making: {currentCoffee.type}</div>
                    <div>time left: {currentCoffee.timeLeft}</div>
                </div> :
                <div className="current-order">Waiting for orders</div>}
        </div>
    )
};

const mapStateToProps = (state: RootState) => ({
    coffeeOrders: getCoffeeOrders(state),
    currentCoffee: getCurrentCoffee(state),
});

export default connect(
    mapStateToProps,
)(Orders);
