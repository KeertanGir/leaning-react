// name, price, category, inStock
// Output:
// Product: iPhone 15
// Price: Rs. 250,000
// Category: Electronics
// Status: "Available ✅" ya "Out of Stock ❌"

function ProductCards({name, price, category, inStock , id}){

    return(
        <div>
            <h2>Product No : {id}</h2>
            <p>Product Name: {name}</p>
            <p>Price: Rs. {price}</p>
            <p>Category: {category}</p>
            <p>Status: {inStock? "Available" : "Out of Stock"}</p>    
        </div>
    )

}

export default ProductCards;
