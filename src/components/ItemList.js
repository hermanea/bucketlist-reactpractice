import React, { useState } from 'react';
import Form from './Form';
import Item from './Item';

function ItemList() {
    const [item, setItem] = useState([]);
    const addItem = (item) => {
        setItem([...item, newItem]);
    };

    const completeItem = (id) => {
        let updatedItem = item.map((item) => {
            if (item.id === id) {
                return { ...item, completed: true }
            }
            return item;

        });
        setItem(updatedItem);
    };

    const deleteItem = (id) => {
        let updatedItem = item.filter((item) => item.id !== id);
        setItem(updatedItem);

    };

    const editItem = (itemId, newValue) => {
        if (!newValue.text) {
            return;
        }
    
    setItem((prev) =>
        prev.map((item) => (item.id === itemId ? newValue : item))
    );
};

return (

);

}




export default ItemList;
