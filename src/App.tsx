import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import OrderDetails from "./components/OrderDetails";

const App: React.FC = () => {
    const [order, setOrder] = useState<{ name:string; price:number; quantity:number} []>([]);

    const handleAddItem = (name: string, price:number) => {
        setOrder((prevOrder) => {
            const filteredItems = prevOrder.filter((item) => item.name === name);

            if(filteredItems.length > 0){
                return prevOrder.map((item) =>
                item.name === name ? {...item, quantity: (item.quantity || 1 ) + 1} : item);
            } else {
                return [...prevOrder, {name, price, quantity: 1}];
            }
        });
    };

    return(
        <div className="App">
            <Header />
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-4'>
                        <OrderDetails order={order} />
                    </div>
                    <div className='col-md-8'>
                        <Menu onAddItem={handleAddItem} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
