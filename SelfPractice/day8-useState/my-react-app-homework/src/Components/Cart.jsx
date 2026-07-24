import { useState } from "react";

// "+" button — quantity barhao
// "-" button — quantity ghatao (1 se neeche na jaye!)
// Total price dikhao: price * quantity
// "Remove" button — quantity 0 ho jaye aur "Cart Empty!" dikhao

const Cart = () => {

    const [count, setCount] = useState({
      item: "iPhone 15",
      price: 250000,
      quantity: 1
    });

    const [removed, setRemoved] = useState(false);


    const increase = () => setCount(prev => ({...prev, quantity: prev.quantity + 1}));


    const decrease = () => setCount(prev => ({
        ...prev, 
        quantity: prev.quantity > 0 ? prev.quantity - 1 : 0
    }));

    const remove = () => {
        setRemoved(!removed)
        setCount(prev => ({...prev, quantity: 0}))

    };

    const show = () => {
        setRemoved(!removed)
    };

    if(removed) return (
    
        <div>
        <h2>Cart Empty! 🛒 </h2>
        <button onClick={increase} > +1 </button>
        <button onClick={decrease} > -1 </button>
        <button onClick={show}>Show Cart 🛒 </button>
        </div>);


    return ( <> 
        
         
             {count && (
                <>
                    <div>
                        <h1>🛒 Cart</h1>
                        <h2>Product Details</h2>
                        <p>Name: { count.item }</p>
                        <p>Price: { count.price}</p>
                        <p>Quantity { count.quantity }</p>
                        <p>Total price : { count.quantity * count.price }</p>
                    </div>

                    <button onClick={increase} > +1 </button>
                    <button onClick={decrease} > -1 </button>
                    <button onClick={remove}>Remove 🗑️</button>

                    <p>Total price : { count.quantity * count.price }</p>  



                </>   
            )} 
        
        {/* <>
            <h1>🛒 Cart</h1>
            <p>Name: {count.item}</p>
            <p>Price: Rs. {count.price}</p>
            <p>Quantity: {count.quantity}</p>
            <p>Total: Rs. {count.quantity * count.price}</p>

            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={remove}>Remove 🗑️</button>
        </> */}

    </> );
}
 
export default Cart;