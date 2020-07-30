import React from 'react';
import axios from 'axios';

import Header from "./components/Header";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
    const [pizzas, setPizzas] = React.useState([]);
    const url = 'http://localhost:3000/db.json';

    React.useEffect(async () => {
        axios.get(url).then(({data}) => {
            setPizzas(data.pizzas);
        });
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' render={() => <Home items={pizzas} />} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
