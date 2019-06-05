import React, { Component } from 'react';
import ItemPageContainer from './../containers/ItemPageContainer';
import AddItemContainer from '../containers/addItemContainer';

class ItemPage extends Component {
    render() {
        return (
            <div className="ItemPage">
                <h1>trang item</h1>  
                <ItemPageContainer/>
                <AddItemContainer/>
            </div>
        );
    }
}

export default ItemPage;