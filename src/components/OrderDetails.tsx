import React from "react";
import OrderList from "./OrderList";

type OrderDetailsProps = {
    order: { name: string; price: number; quantity: number }[];
    onRemoveItem: (name: string) => void;
    onDecreaseItem: (name: string) => void;
    onIncreaseItem: (name: string) => void;
    onClearOrder: () => void;
};

const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onRemoveItem, onDecreaseItem, onIncreaseItem, onClearOrder }) => {

    const totalPrice = order.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="border p-3 bg-light">
            <h4>Order Details:</h4>
            {order.length === 0 ? (
                <p>Order is empty! Please add some items.</p>
            ) : (
                <div>
                    <OrderList
                        order={order}
                        onRemoveItem={onRemoveItem}
                        onDecreaseItem={onDecreaseItem}
                        onIncreaseItem={onIncreaseItem}
                    />
                    <hr />
                    <p>
                        <strong>Total price:</strong> {totalPrice} KGS
                    </p>
                    <button className="btn btn-warning mt-2" onClick={onClearOrder}>
                        Clear Order
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrderDetails;
