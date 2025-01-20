import Header from "./Header";
import {useEffect, useState} from "react"
import { fetchService } from "../../redux/slices/servicesSlice";
import {createBooking} from "../../redux/slices/BookingSlice";
import {useDispatch,useSelector} from "react-redux"
import Footer from "./Footer";
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import {useForm} from "react-hook-form"


function Services() {

    const servicesForCustomer = useSelector((state)=>state.service.services);
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchService())
    },[])

    const {handleSubmit, register} = useForm();
    const [open, setOpen] = useState(false)
    const handleOpen = ()=> setOpen(true)
    const handleClose = ()=> setOpen(false)

    const onSubmit= async(data)=>{
        await dispatch(createBooking(data))
        handleClose()
    }
    

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

    return ( 
        <>
            <Header cardData={servicesForCustomer}/>
            <>
            {
                servicesForCustomer.map((items,index)=>(
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
                            {items.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{items.price} ₹</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{items.duration}</span>
                            <button onClick={handleOpen} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-5 border border-blue-500 hover:border-transparent rounded-xl float-end">
                                Book
                            </button>
                        </div>
                    </div>
                    </div>
                    </div>
                  
                ))
            }
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h1 className='text-center text-md mb-4'>Book Service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className='mt-1 p-2 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div>
                <label htmlFor='duration' className='block text-sm font-medium text-gray-700'>Date</label>
                <input
                  type="text"
                  {...register("date")}
                  className='mt-1 p-2 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div>
                <label htmlFor='price' className='block text-sm font-medium text-gray-700'>Time</label>
                <input
                  type="text"
                  {...register("time")}
                  className='mt-1 p-2 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='inline-flex p-2 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                 Book
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
      </>
      
            
            <Footer/>
            
        </>
     );
}

export default Services;