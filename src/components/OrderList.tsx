import React from "react";
import OrderItem from "./OrderItem";

type OrderListProps = {
    order: { name: string; price: number; quantity: number }[];
    onRemoveItem: (name: string) => void;
    onDecreaseItem: (name: string) => void; 
    onIncreaseItem: (name: string) => void;
};

const OrderList: React.FC<OrderListProps> = ({ order, onRemoveItem, onDecreaseItem, onIncreaseItem }) => {
    return (
        <ul className="list-unstyled">
            {order.map((item, index) => (
                <OrderItem
                    key={index}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onRemove={() => onRemoveItem(item.name)}
                    onDecrease={() => onDecreaseItem(item.name)}
                    onIncrease={() => onIncreaseItem(item.name)}
                />
            ))}
        </ul>
    );
};

export default OrderList;
