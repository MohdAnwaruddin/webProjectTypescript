
'use client'

import { useEffect, useState } from "react";
import CartCard from "../components/CartCard"

import "./index.css"
import axiosInstance from "../../../axiosInstance";

const Page = () => {


    const [cartProducts, setCartProducts]:any = useState(null)
    const[total, setTotal]:any = useState(0) 
    useEffect(() => {
        handleFetchCardProducts()
    }, [])

    const handleReload = async() => {
        await handleFetchCardProducts()
    }



   const  handleFetchCardProducts = async () => {
    const handleFetchResponse =  await axiosInstance.post('/cart/fetch-cart', { 
        userId:"12345"
    })
    if(handleFetchResponse.data.success)
    {   
        setCartProducts(handleFetchResponse.data.data)
    }  
   } 

   const calculateTotal = () => {
    let tempTotal = 0
    cartProducts.map((cartProduct:any) => {
        tempTotal+=(cartProduct.productId.price * cartProduct.quantity)
    })
    setTotal(tempTotal)
   }

   useEffect(() => {
    if(cartProducts)
        calculateTotal()
   }, [cartProducts])
   
    
    return (
        <div>
         <h1>Cart page</h1>
         <div>

            {cartProducts?.map((cartProduct:any)=>{
                        return (
                            <CartCard title={cartProduct.productId.title} productQuantity={cartProduct.quantity} productId={cartProduct.productId._id} userId={"12345"} handleReload={handleReload} price={cartProduct.productId.price}/>
                        )
            })}
            {total>0 && (
                <div className="total">
                <h1>Total price</h1>
                    <h1>${parseFloat(total).toFixed(2)}</h1>  
                </div>
                )
             }
             {total==0 && <h1>No products found in your cart</h1>}
           


            


         </div>
        </div>
    )
};

export default Page;