import React from "react";

type OrderDetailsProps = {
    order:{name:string; price:number; quantity:number}[];
    onRemoveItem:(name: string) => void;
    onDecreaseItem:(name: string) => void;
    onIncreaseItem:(name: string) => void;
};

const OrderDetails: React.FC<OrderDetailsProps> = ({order, onRemoveItem, onDecreaseItem, onIncreaseItem}) => {
    const totalPrice = order.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return(
        <div className="border p-3">
            <h4>Order Details:</h4>
            {order.length === 0? (
                <p>Order is empty! Please add some items.</p>
            ):(
                <div>
                    <ul className="list-unstyled">
                        {order.map((item, index) => (
                            <li key={index}>
                                {item.name} x {item.quantity} - {item.price * item.quantity} KGS
                                <button className="btn btn-outline-secondary btn-sm me-2"
                                        onClick={() => onDecreaseItem(item.name)}>
                                    -
                                </button>
                                <span className="me-2">{item.quantity}</span>
                                <button className="btn btn-outline-secondary btn-sm me-2"
                                        onClick={() => onIncreaseItem(item.name)}>
                                    +
                                </button>
                                <button className="btn btn-outline-danger btn-sm"
                                        onClick={() => onRemoveItem(item.name)}>
                                    &times;
                                </button>
                            </li>
                        ))}
                    </ul>
                    <hr/>
                    <p>
                        <strong>Total price:</strong> {totalPrice} KGS
                    </p>
                </div>
            )}
        </div>
    );
};

export default OrderDetails;