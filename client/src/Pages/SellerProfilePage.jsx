import React from 'react'
import { SellerProfile } from '../Components/SellerProfile'
import { useParams } from 'react-router-dom'

export const SellerProfilePage = () => {

  const { id } = useParams()
  console.log(id);

  return (
    <div>
        <SellerProfile id = {id} />
    </div>
  )
}