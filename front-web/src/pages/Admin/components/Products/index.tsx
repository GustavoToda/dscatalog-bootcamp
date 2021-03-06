import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Products = () => {
    return (
        <div>
            <Switch>
                <Route path="/admin/products" exact>
                    <List />
                </Route>
                <Route path="/admin/products/create">
                    <Form />
                </Route>
                <Route path="/admin/products/:productsId">
                    <h1>edit</h1>
                </Route>
            </Switch>    
        </div>
    );
}

export default Products;