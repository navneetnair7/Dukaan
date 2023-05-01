import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import axios from 'axios'
import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'

export const SellerNoOfOrders = () => {

    const [opened, { open, close }] = useDisclosure(false);
    const { id } = useParams()

    const [queues, setQueue] = useState([{}])

    useEffect(() => { 
        axios.get(`http://localhost:4000/cart/shopqueue/${id}`)
            .then(res => {
                //console.log(res.data);
                setQueue(res.data)
            })
    }, [])

    return (
      <div className=''>
          <p className='text-md font-semibold text-center'>New Orders</p>
          <div className='flex gap-12 mt-3 justify-center' onClick={open}>
              <div className='w-20 h-20 bg-white p-2 object-contain'>
                  <img src='/images/bag.png' alt="orders" />
              </div>
              {/* <div className='my-auto text-4xl font-bold'>
                  5
              </div> */}
          </div>
          <Modal
          opened = {opened}
          onClose={close}
          title='Test'
          centered
          >
          {
          queues.map((item) => {
            return(
                <div className='mx-1 flex justify-around'>
                    <p>{item.Customer}</p>
                    <p>{item.ItemName}</p>
                    <p>{item.Quantity}</p>
                </div>
              )
            })
          } 
          </Modal>
      </div>
    )
}