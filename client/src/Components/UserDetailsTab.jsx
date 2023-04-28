import { UserStores } from './UserStores'
import UserProfileCard from './UserProfileCard'
import UserOrders from './UserOrders'


export const UserDetailsTab = () => {
  return (
    <div className='w-full rounded-3xl mt-10 p-8'>
       <UserProfileCard />
       <div className='flex justify-center'>
        <div className='w-11/12 h-88 border-4 rounded-2xl border-slate-100'>
            <div className='text-center font-semibold text-xl pt-4'>
                Your Subscribed Stores
            </div>
            <UserStores />
        </div>
       </div>
       <UserOrders />

    </div>
  )
   
}

export default UserDetailsTab