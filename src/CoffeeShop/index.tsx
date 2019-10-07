import React from 'react';
import Menu from "../Menu";
import Orders from "../Orders";
import './index.css';

export interface MenuItems {
    [coffee: string]: number
}

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
            </div>
        </div>
    )
};

export default CoffeeShop;
