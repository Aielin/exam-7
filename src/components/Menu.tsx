import React from "react";
import MenuItem from "./MenuItem";

type MenuProps = {
    onAddItem: (name: string, price: number) => void;
};

const Menu: React.FC<MenuProps> = ({ onAddItem }) => {
    const items = [
        {name: 'Hamburger', price: 80},
        {name: 'Coffee', price: 70},
        {name: 'Cheeseburger', price: 90},
        {name: 'Tea', price: 50},
        {name: 'Fries', price: 45},
        {name: 'Cola', price: 40},
    ];

    return (
        <div className="d-flex flex-wrap">
            {items.map((item) => (
                <MenuItem
                key={item.name}
                name={item.name}
                price={item.price}
                onAdd={() => onAddItem(item.name, item.price)} />
            ))}
        </div>
    );
};

export default Menu;