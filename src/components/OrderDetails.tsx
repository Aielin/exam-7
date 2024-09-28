import React from "react";

type OrderDetailsProps = {
    order:{name:string; price:number; quantity:number}[];
};

const OrderDetails: React.FC<OrderDetailsProps> = ({order}) => {
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
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <p>
                        <strong>Total price:</strong> {totalPrice} KGS
                    </p>
                </div>
            )}
        </div>
    );
};

export default OrderDetails;