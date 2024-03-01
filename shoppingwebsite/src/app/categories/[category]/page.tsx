'use client'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./category.css"
import axiosInstance from "../../../../axiosInstance";
import Card from "@/app/components/Card";

type Product = {
  title: string;
  link: string;
  url: string;
  _id:string
}

type CategoryData = {
  [key: string]: Product[];
};

export default function Page({params}: {params: { category: string }}) {
  
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>();

useEffect(() => {
  fetchProducts()
  
}, [])

useEffect(() => {
  console.log(products)
  
}, [products])

 const fetchProducts = async () => {

const productResponse = await axiosInstance.post('/products/fetch-products', {
    categoryName: (params.category).replace(/-/g, ' ')
})

    if (productResponse.data.success) {
      setProducts(productResponse.data.data)      
    }

 }
  return (
    <div className="products-container">
        <div className="title"  key={params.category}>
        <h1 >{params.category.toUpperCase()} PRODUCTS</h1>
        </div>
        <div className="products">
          {products?.map((product) => (
           < Card name={product.title} imagePath={product.url} link={`/product/${product._id} `}/>   
            ))}
            {products?.length==0 && <h1> No Products Found</h1>}
        </div>
      </div>
   
  );
}
