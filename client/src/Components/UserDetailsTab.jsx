import React from "react";
import { UserStores } from "./UserStores";
import UserProfileCard from "./UserProfileCard";
import UserOrders from "./UserOrders";
import { UserSubsProducts } from "./UserSubsProducts";
import { useUser } from "@clerk/clerk-react";

export const UserDetailsTab = () => {
  const { user } = useUser();
  const name = user.firstName;

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <UserProfileCard name={name} />
        <div className="w-11/12 h-[400px] mt-20 rounded-[13px] shadow-2xl bg-white mb-12">
          <div className="text-center font-semibold text-4xl pt-4 mt-2">
            Your Subscribed Stores
          </div>
          <UserStores />
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-center items-center ">
        <div className="w-11/12 mb-12">
          <div className=" w-2/3 mx-auto h-12 pt-2 text-center font-bold text-2xl rounded-t-[13px] mt-4 bg-ouryellow hover:bg-yellow-500">
            Your Subscribed Products
          </div>
          <UserSubsProducts />
        </div>
        <div className="w-11/12 mt-8">
          <div className=" w-2/3 mx-auto h-12 pt-2 text-center font-bold text-2xl rounded-t-[13px] mt-4 bg-ouryellow hover:bg-yellow-500">
            Your Past Orders
          </div>
          <UserOrders />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsTab;
