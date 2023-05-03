import React from 'react'
import GridItem from './GridItem'
import { GridViewHeader } from './GridViewHeader'
import  GridCategoryList  from './GridCategoryList'

export const GridView = () => {
  return (
    <div className='felx flex wrap'>
    <div className='w-1/5 '>
      <GridCategoryList />
    </div>
    <div className='mt-6 float-right w-4/5 '>
      <GridViewHeader />
      <div className= 'flex  flex-wrap '>
      <GridItem />
      </div>
    </div>
    </div> 
  )
}