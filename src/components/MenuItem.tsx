import React from 'react';

type MenuItemProps = {
    name: string;
    price: number;
    onAdd: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ name, price, onAdd }) => {

    const imageMap: { [key: string]: string } = {
        Hamburger: "/src/assets/hamburger.png",
        Coffee: "/src/assets/coffee.png",
        Cheeseburger: "/src/assets/cheeseburger.png",
        Tea: "/src/assets/tea.png",
        Fries: "/src/assets/fries.png",
        Cola: "/src/assets/cola.png",
    };

    return (
        <div className="card p-2 m-2 shadow-sm text-center" style={{width: "12rem"}}>
            <img src={imageMap[name] || "/src/assets/default.png"}
                 alt={name}
                 style={{width: "100px", height: "100px", margin: "0 auto"}}
            />
            <h5 className="card-title mt-2">{name}</h5>
            <p className="card-text">Price: {price} KGS</p>
            <button className="btn btn-warning" onClick={onAdd}>
                Add to Order
            </button>
        </div>
    );
};

export default MenuItem;