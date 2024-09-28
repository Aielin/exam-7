import React from 'react';

type MenuItemProps = {
    name: string;
    price: number;
    onAdd: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ name, price, onAdd }) => {
    return (
        <div className='card m-2 p-2 text-center'>
            <h5>{name}</h5>
            <p>Price: {price} KGS</p>
            <button type={"button"} onClick={onAdd}>Add to Order</button>
        </div>
    );
};

export default MenuItem;