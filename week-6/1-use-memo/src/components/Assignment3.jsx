import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'Apple', value: 100 },
        { name: 'cake', value: 80 },
        // Add more items as needed
    ]);
    const [nameInput, setNameInput] = useState('');
    const [valueInput, setValueInput] = useState('');

    // Your code starts here
    const totalValue = useMemo(()=>{
        let sum = 0;
        items.forEach((val)=>{
            sum = sum + val.value;
        })
        return sum;
    },[items,nameInput,valueInput]);
    // Your code ends here
    return (
        <div>
            <input type="text" onChange={(e)=>{setNameInput(e.target.value)}} placeholder='Item Name'/>
            <input type="number" onChange={(e)=>{setValueInput(Number(e.target.value))}} placeholder='Item Value'/>
            <button onClick={()=>{
                // if(!nameInput || !valueInput) {
                //     return alert('wrong inputs');
                // }
                let obj = {
                    name: nameInput,
                    value: valueInput
                }
                setItems([...items,obj]);
            }}>Add to Cart</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
