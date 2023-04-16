import React from 'react'
import GridItem from './GridItem'
import { GridViewHeader } from './GridViewHeader'

export const GridView = () => {
  return (
    <div className='mt-6 float-right w-4/5  '>
      <GridViewHeader />
      <div className= 'flex flex-wrap '>
        <GridItem />
      </div>
    </div>
  )
}