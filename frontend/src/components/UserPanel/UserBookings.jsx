import { useSelector , useDispatch} from "react-redux"
import Footer from "./Footer"
import Header from "./Header"
import { useEffect } from "react"
import { getBooking } from "../../redux/slices/BookingSlice"
// import { jwtDecode } from "jwt-decode"



function UserBookings() {
    // const token = localStorage.getItem("token")

    // const myToken = jwtDecode(token)
    // const UserId = myToken.id
    // console.log(UserId)

    const {Bookings} = useSelector((state)=>state.bookings)
    console.log(Bookings)

    // const name = Bookings.map((item)=>item.userId._id)
    // console.log(name)


    const dispatch = useDispatch()
    
    useEffect(()=>{
            dispatch(getBooking())
    },[])

    
    
  return (
    <div>
      <Header/>
      <div>
        {/* {
            Bookings.map((item)=>(
                <>
                   <button>{item.userId._id === UserId ? item.userId.name : "empty"}</button>
                </>
            ))
        } */}
      </div>
      <Footer/>
    </div>
  )
}

export default UserBookings
