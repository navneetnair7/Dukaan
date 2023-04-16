import React from 'react'
import { useParams } from 'react-router-dom'

export const GridViewHeader = () => {

  const { name } = useParams()
  return (
    <div className=''>
        <p className='font-bold text-3xl'>{name}</p>
    </div>
  )
}