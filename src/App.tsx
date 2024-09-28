import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

const App: React.FC = () => {
    const [order, setOrder] = useState<{ name:string, price:number } []>([]);

    const handleAddItem = (name: string, price:number) => {
        setOrder([...order,{name, price}]);
    };

    return(
        <div className="App">
            <Header />
            <div className='container mt-3'>
                <Menu onAddItem={handleAddItem} />
            </div>
        </div>
    );
};

export default App;
