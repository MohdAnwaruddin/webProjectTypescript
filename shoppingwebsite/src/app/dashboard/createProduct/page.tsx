
'use client'

import { useState } from "react"
import axiosInstance from "../../../../axiosInstance"


export default function Page() {

  const[title, setTitle] = useState(null)
  const[description, setDescription] = useState(null)
  const[ratings, setRatings] = useState(null)
  const[review, setReview] = useState(null)
  const[price, setPrice] = useState(null)
  const[category, setCategory] = useState(null)

 

  const handleAddProduct = async() => {

                         const createProduct = await axiosInstance.post('/products/create-product', {
                                "title":title,
                                "description":description,
                                "ratings": ratings,
                                "review":review,
                                "price":price,
                                "category":category
                              } )

  }
    return ( 
    
    <div> 
<h1>create products</h1>
 
      {/* <input value={title||""} onChange={(e)=> {setTitle(e.target.value)}} placeHolder="enter title"/>

      <input value={description||""} onChange={(e)=> {setTitle(e.target.value)}} placeHolder="enter description"/>

      <input value={ratings||""} onChange={(e)=> {setTitle(e.target.value)}} placeHolder="enter ratings"/>

      <input value={review||""} onChange={(e)=> {setTitle(e.target.value)}} placeHolder="enter review"/>

      <input value={price||""} onChange={(e)=> {setTitle(e.target.value)}} placeHolder="enter price"/>

      <input value={category||""} onChange={(e)=> {setTitle(e.target.value)}} placeHolder="enter category"/> */}

      <button onClick={()=> handleAddProduct()}> Add Products </button>
      
      </div> 

    
    )
  }