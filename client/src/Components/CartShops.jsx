import axios from "axios";
import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import Invoice from "./Invoice";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const CartShops = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const [shops, setShops] = useState([]);
  const theme = useMantineTheme();
  const { user } = useUser();
  const name = user.firstName;

  const getShopData = () => {
    axios.get(`http://localhost:4000/subscribe/cart/${name}`).then((res) => {
      console.log(res.data);
      setShops(res.data);
    });
  };

  const placeOrder = async () => {
    await axios
      .delete(`http://localhost:4000/cart/${name}`)
      .then(navigate("/user"));
  };

  useEffect(() => {
    getShopData();
  }, []);

  return (
    <div className="flex h-1/2 w-full">
      {shops.map((shop) => {
        return (
          <div className="flex bg-yellow-50 flex-col m-10 w-1/3 justify-start rounded shadow-lg">
            <div className="h-auto w-full mx-auto flex justify-around">
              <div>
                <Spline scene="https://prod.spline.design/1ZvU-MI9PGAvG1Pl/scene.splinecode" />
              </div>
              <div
                className="w-20 text-center h-1/3 p-5 border border-black rounded-lg my-auto hover:cursor-pointer"
                onClick={open}
              >
                3/3
              </div>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-3xl">{shop.StoreName}</p>
              <p className="text-xl">{shop.Address}</p>
            </div>
            <div className="my-2 w-1/2 rounded-lg mx-auto">
              <button
                className="border rounded-lg w-full border-black h-full hover:bg-yellow-600"
                onClick={placeOrder}
              >
                PlaceOrder
              </button>
            </div>
          </div>
        );
      })}

      {/* <Alert withCloseButton closeButtonLabel="Close alert" onClose={'hey'} /> */}

      <Modal
        opened={opened}
        onClose={close}
        title="Invoice"
        centered
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <Invoice />
      </Modal>
    </div>
  );
};

export default CartShops;
