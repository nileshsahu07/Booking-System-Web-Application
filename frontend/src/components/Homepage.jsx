import {useEffect} from "react"
import Header from "./Header";
import { fetchService } from "./redux/slices/servicesSlice";
import {useDispatch,useSelector} from "react-redux"

function Homepage() {
    const servicesForCustomer = useSelector((state)=>state.service.services)
    console.log(servicesForCustomer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchService())
    },[])

    return ( 
        <>
            <Header cardData={servicesForCustomer}/>
            
        </>
     );
}

export default Homepage;