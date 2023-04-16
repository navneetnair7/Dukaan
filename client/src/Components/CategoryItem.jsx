import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CategoryItem = () => {

  const navigate = useNavigate()

  const initialCategory = [{
      Name: "",
      NumberOfItems: 0,
      Image: ""
  }]
  const [ categories, setCategories ] = useState(initialCategory)

  const getCategories = () => {
    axios.get('http://localhost:4000/categories')
      .then(res => {
        // console.log(res.data);
        let categoryData = res.data;
        let data = getCategoryArray(categoryData)
        // console.log(data);
        // console.log(data.map(row => row.Image));
        setCategories(data);
        // console.log(categories);
      })
  }

  const handleClick = (e, name) => {
    if (e.target.tagName !== "BUTTON") {
      e.preventDefault();
      navigate(`/category/${name}`)
    }
  }

  const getCategoryArray = (data) => 
        data.map((row) => ({
            Name: row.Name,
            NumberOfItems: row.NumberOfItems,
            Image: row.Image
        }))

  useEffect((e) => {
    // e.preventDefault()
    getCategories()
  }, [])

  return (
    categories.map((category) => {
        return (
            <div className= 'flex flex-col w-1/4 bg-yellow-100 hover:bg-yellow-200 border rounded-xl border-black hover:cursor-pointer'>
                <div className='flex h-80 justify-center' onClick={(e) => handleClick(e, category.Name)}>
                    <img src={category.Image} className='h-40 mt-10'/>
                </div>
                <div className='text-center text-3xl mb-10'>{category.Name}</div>
            </div>
        )
    })
  )
}

export default CategoryItem