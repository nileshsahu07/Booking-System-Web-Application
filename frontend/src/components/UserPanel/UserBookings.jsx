import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";
import { getUserBooking } from "../../redux/slices/UserBookingSlice";

function UserBookings() {

const dispatch = useDispatch()

useEffect(()=>{
    dispatch(getUserBooking());
},[dispatch])

const UserBookings = useSelector((state)=>state.userBookings.UserBookings);
const bookings = UserBookings.userBookings;

  return (
    <>
      <Header />
      {
                bookings.map((items,index)=>(
                    <div key={index}>
                    <img
                     alt=""
                     src="https://media.istockphoto.com/id/1973194130/photo/professional-hairdressers-serving-clients-in-salon.webp?b=1&s=170667a&w=0&k=20&c=rXHxeoMBgCFYtQRqfYRnx-SNxoBJjMMrByw-Z4p6a2Y="
                    className="absolute inset-0 -z-10 h-auto  w-full object-cover object-right md:object-center filter blur-sm"
                    />
                    <div className=" mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 inline-block">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{items.name}</div>
                            <p className="text-gray-500 text-base">
                            {/* {items.description} */}sdfsklj
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{items.price} ₹</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{items.duration}</span>
                            <button  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-5 border border-blue-500 hover:border-transparent rounded-xl float-end">
                                Book
                            </button>
                        </div>
                    </div>
                    </div>
                    </div>
                  
                ))
            }
      <Footer />
      </>
  );
}

export default UserBookings;
