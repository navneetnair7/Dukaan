import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import axios from 'axios'
import { useDisclosure } from '@mantine/hooks'
import { Alert, Indicator, Modal } from '@mantine/core'
// import { IconAlertCircle } from '@tabler/icons-react';

const Seller = () => {

    const [opened, { open, close }] = useDisclosure(false);
    const { shopid } = useParams()

    const [queues, setQueue] = useState([{}])

    useEffect(() => { 
        axios.get(`http://localhost:4000/cart/shopqueue/${shopid}`)
            .then(res => {
                //console.log(res.data);
                setQueue(res.data)
            })
    }, [])

  return (
    <div className='flex justify-center'>
        <div className='mt-10 hover:scale-110'>
        <Indicator>
        <div className='w-20 border border-black h-10' onClick={open}></div>
        </Indicator>
        </div>
    {/* <Alert title="Bummer!" color="red">
      Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
    </Alert> */}
    <Modal
        opened = {opened}
        onClose={close}
        title='Test'
        centered
    >
    {
        queues.map((item) => {
            return(
                <div className='mx-1'>
                    <p>{item.ItemName}</p>
                </div>
            )
        })
    }
    </Modal>
    </div>
  )
}

export default Seller