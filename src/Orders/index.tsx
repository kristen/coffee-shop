import React from 'react';
import {RootState} from "../reducers";
import {getOrders} from "../CoffeeShop/selectors";
import {connect} from "react-redux";
import {CoffeeOrder} from "../CoffeeShop/reducers";

interface OwnProps {
    orders: CoffeeOrder[];
}

type Props = OwnProps

const Orders: React.FC<Props> = ({orders}) => {

    return (
        <div className="menu">
            <div className="menu-title">
                Orders
            </div>
            <ul>
                {orders.map(({type, timeLeft}, index) =>
                    <li className="item" key={index}>
                        {type}: {timeLeft}
                    </li>
                )}
                {orders.length ? '' : <div className="empty-orders">No orders</div>}
            </ul>
        </div>
    )
};

const mapStateToProps = (state: RootState) => ({
    orders: getOrders(state),
});

export default connect(
    mapStateToProps,
)(Orders);
