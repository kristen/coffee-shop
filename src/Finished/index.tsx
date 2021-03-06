import React from "react";
import {connect} from "react-redux";
import {CoffeeOrder} from "../CoffeeShop/reducers";
import {RootState} from "../reducers";
import {getCompletedOrders} from "../CoffeeShop/selectors";

interface OwnProps {
    completedOrders: CoffeeOrder[];
}

type Props = OwnProps;

const Finished: React.FC<Props> = ({completedOrders}) => {
    return (
        <div className="orders">
            <div className="orders-title">
                Finished
            </div>
            <ul>
                {completedOrders.map(({type, timeLeft}, index) =>
                    <li className="item" key={index}>
                        {type}: Ready for pickup ({3+timeLeft})
                    </li>
                )}
                {completedOrders.length ? '' :
                    <div className="empty-orders">
                        No completed orders
                    </div>}
            </ul>
        </div>
    )
};


const mapStateToProps = (state: RootState) => ({
    completedOrders: getCompletedOrders(state),
});

export default connect(
    mapStateToProps,
)(Finished);
