import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import Invoice from './Invoice';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, useMantineTheme, Notification, Alert } from '@mantine/core';

const CartShops = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [shops, setShops] = useState([])
    const theme = useMantineTheme();

    const getShopData = () => {
        axios.get('http://localhost:4000/subscribe/cart/Navneet')
            .then(res => {
                console.log(res.data);
                setShops(res.data)
            })
    }

    useEffect(() => {
        getShopData()
    }, [])

    return (
        <div className='flex h-1/2 w-full'>{
            shops.map((shop) => {
                return(
                    <div className='flex bg-yellow-50 flex-col m-10 w-1/3 justify-start rounded shadow-lg'>
                        <div className='h-auto w-full mx-auto flex justify-around'>
                            <div>
                                <Spline scene='https://prod.spline.design/1ZvU-MI9PGAvG1Pl/scene.splinecode' />
                            </div>
                            <div className='w-20 text-center h-1/3 p-5 border border-black rounded-lg my-auto hover:cursor-pointer' onClick={open}>
                                3/3
                            </div>
                        </div>
                        <div className='flex flex-col text-center'>
                            <p className='text-3xl'>{shop.StoreName}</p>
                            <p className='text-xl'>{shop.Address}</p>
                        </div>
                        <div className='my-2 w-1/2 rounded-lg mx-auto'>
                            <button className='border rounded-lg w-full border-black h-full hover:bg-yellow-600'>Select</button>
                        </div>
                    </div>
                )
            })
        }

        {/* <Alert withCloseButton closeButtonLabel="Close alert" onClose={'hey'} /> */}

        <Modal
            opened = {opened}
            onClose={close}
            title='Test'
            centered
            overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3}}
        >
            <Invoice />
        </Modal>
        
        </div>
    )
}

export default CartShops