import { useEffect, useState } from "react";
import axiosInstance from "../../../../axiosInstance";


const Page = ({title, productQuantity, productId, userId, handleReload, price} :any) => {


    const [quantity, setQuantity] =  useState(productQuantity);
    
const updateProduct = async  (operation:any) => { 
    let tempQuantity =  productQuantity
    if(operation=="add")
    {
    tempQuantity++
    }
    else if (operation == "remove") {
        if(tempQuantity>1)
            tempQuantity--
    }
const updateResponse = await axiosInstance.post('/cart/update-product', {userId, productId, quantity:tempQuantity })
    if(updateResponse.data.success)
    {
        setQuantity(tempQuantity)
    }
}

const handleRemove = async() => {
    const removeResponse = await axiosInstance.post("/cart/delete-product", {productId: productId, userId: userId})
    if(removeResponse.data.success){
        await handleReload()
    }
}

useEffect(() => {
  handleReload()
}, [quantity])
    return(

        
     
          <div className="cart-container">

        <h3 className="title"> {title} </h3>
        <button className="minus" onClick={()=> updateProduct("remove")}> - </button>
        <p className="quantity"> {quantity} </p>
        <button className="plus" onClick={() =>updateProduct("add")}> + </button>
        <button className="remove-product" onClick={handleRemove}> Remove from Cart</button>
        <p>${price}</p>
        </div>
        
    )

}

export default Page;