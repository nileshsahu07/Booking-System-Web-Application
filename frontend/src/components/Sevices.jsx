import Header from "./Header";
import {useEffect} from "react"
import { fetchService } from "./redux/slices/servicesSlice";
import {useDispatch,useSelector} from "react-redux"


function Services() {

    const servicesForCustomer = useSelector((state)=>state.service.services)
    console.log(servicesForCustomer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchService())
    },[])

    return ( 
        <>
            <Header cardData={servicesForCustomer}/>
            
            {
                servicesForCustomer.map((items)=>(
                    <>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 inline-block">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{items.name}</div>
                            <p className="text-gray-700 text-base">
                            {items.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{items.price} ₹</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{items.duration}</span>
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-5 border border-blue-500 hover:border-transparent rounded-xl float-end">
                                Book
                            </button>
                        </div>
                    </div>
                    </div>
                    </>
                  
                ))
            }
            
            
            
        </>
     );
}

export default Services;