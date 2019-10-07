import React from 'react';
import CoffeeShop from "../CoffeeShop";

const App = () => {
    const menu = {
        mocha: 5,
        chai: 4,
        cappuccino: 3,
        americano: 2,
        espresso: 1,
    };
    return (
        <CoffeeShop menu={menu} />
    )
};

export default App;
