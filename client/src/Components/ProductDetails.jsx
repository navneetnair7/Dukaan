import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AddQuantity from "./AddQuantity";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const ProductDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

  const [subscriptionType, setSubscriptionType] = useState("");
  const [store, setStore] = useState("");
  const [stores, setStores] = useState([{ StoreName: "" }]);

  const handleSubscriptionChange = (event) => {
    setSubscriptionType(event.target.value);
  };

  const handleStoreChange = (event) => {
    setStore(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Subscription:", subscriptionType);
    console.log("Store:", store);
    await axios.post('http://localhost:4000/item/subscribe/Navneet', {
      itemname: product.Name,
      subscription: subscriptionType,
      store: store,
      image: product.Image
    })
  };

  const [product, setProduct] = useState({
    Name: "",
    Price: 0,
    Image: "",
    Descripton: "",
    Quantity: 1,
  });

  const getProductDetails = () => {
    axios.get(`http://localhost:4000/product/${name}`).then((res) => {
      let productDetails = res.data;
      setProduct(productDetails[0]);
      setProduct((prevState) => {
        return { ...prevState, Quantity: 1 };
      });
    });
  };

  const AddtoCart = async (e) => {
    if (e.target.tagName === "BUTTON") {
      await axios.post("http://localhost:4000/cart/add", {
        customer: "Navneet",
        name: product.Name,
        price: product.Price,
        quantity: product.Quantity,
      });
    }
  };

  const getSubscibedStores = () => {
    axios.get("http://localhost:4000/subscribe/user/Navneet").then((res) => {
      console.log(res.data);
      setStores(res.data);
    });
  };

  useEffect(() => {
    getProductDetails();
    getSubscibedStores();
  }, []);

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2 h-1/2">
        <img src={product.Image} alt={product.Name} />
      </div>
      <div className="w-1/2 h-auto ml-32 mt-4">
        <div className="text-3xl font-bold">
          <p>{product.Name}</p>
        </div>
        <div className="pl-20 pt-7 text-xl font-semibold">
          <p>Rs. {product.Price}</p>
        </div>
        <div className="ml-12 mt-8"></div>
        <hr className="mt-10"></hr>
        <div className="flex">
          <div className="mb-8 mt-8 pt-2 ml-20">
            <AddQuantity />
          </div>
          <div className="flex mt-8 mb-8 mx-auto w-2/3 gap-2">
            <button
              className="bg-green-400 hover:bg-green-700 h-10 w-full text-white text-center font-semibold rounded border border-gray-500"
              onClick={(e) =>
                AddtoCart(e, { name: product.Name, price: product.Price })
              }
            >
              Add to Cart
            </button>
            <button
              className="bg-green-400 hover:bg-green-700 h-10 w-full text-white text-center font-semibold rounded border border-gray-500"
              onClick={open}
            >
              Subscribe
            </button>
          </div>
        </div>
        <hr></hr>
        <div className="flex justify-center">
          <img src="/images/graphic.png" alt="graphic" />
        </div>
        <div className=" w-full pt-8">
          <p className="font-semibold">About this item</p>
          <div className="mt-8">
            <p className="font-semibold">Expiry</p>
            <p>Please refer to the packaging of the producfoexpiry date.</p>
          </div>
          <p className="pt-2">{product.Descripton}</p>
        </div>
        <div className="w-full">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="bg-green-400 hover:bg-green-700 h-10 w-1/2 mx-auto text-white text-center font-semibold rounded border border-gray-500"
          >
            Back to Products
          </button>
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title="Subscribe"
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
        <form onSubmit={handleSubmit}>
          <div>
            <label className="px-2">Subscription Type:</label>
            <select
              value={subscriptionType}
              onChange={handleSubscriptionChange}
            >
              <option value="" className="">
                Select a subscription type
              </option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="mt-5">
            <label className="px-2">Store:</label>
            <select value={store} onChange={handleStoreChange}>
              <option value="">Select a store</option>
              {stores.map((storey) => (
                <option value={storey.StoreName}>{storey.StoreName}</option>
              ))}
            </select>
          </div>
          <button
            className="border mt-10 p-2 rounded-lg ml-40 border-green-400 hover:bg-green-400 hover:text-white"
            type="submit"
            onClick={close}
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ProductDetails;
