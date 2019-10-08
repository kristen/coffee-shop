import React from 'react';
import Menu from "../Menu";
import Orders from "../Orders";
import './index.css';
import {MenuItems} from "./reducers";
import {connect} from "react-redux";
import {RootState} from "../reducers";
import {getMenu} from "./selectors";
import Finished from "../Finished";
import Clock from '../Clock';

interface Props {
    menu: MenuItems;
}

const CoffeeShop: React.FC<Props> = ({menu}) => {
    return (
        <div className="coffee-shop">
            <h1>Welcome to the Coffee Shop</h1>
            <div>
                <div className="board">
                    <Menu menu={menu} />
                </div>
                <div className="board">
                    <Orders />
                </div>
                <div className="board">
                    <Finished />
                </div>
            </div>
            <div className="clear">
                <Clock />
            </div>
        </div>
    )
};


const mapStateToProps = (state: RootState) => ({
    menu: getMenu(state),
});

export default connect(
    mapStateToProps
)(CoffeeShop);
