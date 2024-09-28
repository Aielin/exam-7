import React from "react";

type OrderItemProps = {
    name: string;
    price: number;
    quantity: number;
    onRemove: () => void;
    onDecrease: () => void;
    onIncrease: () => void;
};

const OrderItem: React.FC<OrderItemProps> = ({ name, price, quantity, onRemove, onDecrease, onIncrease }) => {

    return (
        <li className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
            <div className="me-4">
                <strong>{name}</strong> - {price * quantity} KGS
            </div>
            <div>
                <button className="btn btn-outline-secondary btn-sm me-2" onClick={onDecrease}>
                    -
                </button>
                <span className="me-2">{quantity}</span>
                <button className="btn btn-outline-success btn-sm me-2" onClick={onIncrease}>
                    +
                </button>
                <button className="btn btn-outline-danger btn-sm" onClick={onRemove}>
                    &times;
                </button>
            </div>
        </li>
    );
};

export default OrderItem;