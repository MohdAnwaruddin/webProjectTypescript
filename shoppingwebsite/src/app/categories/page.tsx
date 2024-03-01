'use client'
import React, { useEffect, useState } from "react";
import "./products.css"
import axiosInstance from "../../../axiosInstance";
import Card from "../components/Card";

export default function Page() {
  const [categories, setCategories] = useState<any[]>([])
  useEffect  ( () => { 
 fetchCategories();

  }, [])
  //fetch categories
  const fetchCategories = async () => {

    const categoryResponse:any = await axiosInstance.get('/products/fetch-categories')

    if (categoryResponse.data.success) {
          setCategories(categoryResponse.data.data)    
    }
  }
  return (
    <div > 
      <div className="categories-container">
        <div className="header1">
        <h1 className="title"> Product Categories</h1>
        </div>
          <div className="categories">
          { categories.map( category => {
                      let link = `/categories/${category.name.replace(/\s+/g, '-')}`;
            return (  
              < Card name={category.name} link={link} imagePath={category.url[0]} /> )}
            )      
          } 
          </div>
      </div>
    </div>
  )
}