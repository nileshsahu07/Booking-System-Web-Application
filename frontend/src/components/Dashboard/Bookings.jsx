import { DataGrid } from '@mui/x-data-grid';
// import { Chip } from '@mui/material';
import './Datagrid.css';
import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getBooking } from '../../redux/slices/BookingSlice';

function Bookings() {

    const {Bookings} = useSelector((state)=>state.bookings)
    const dispatch = useDispatch();
    // console.log(Bookings)

    useEffect(()=>{
        dispatch(getBooking())
    },[])

  const columns = [
    { field: 'name', headerName: 'Service', width: 150 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'time', headerName: 'Time', width: 150 },
    {
        field: 'userId',
        headerName: 'User Name',
        width: 200,
        renderCell: (params) => (
            <div>
            {params.row.userId.name}
              </div>
          ),
      },
      {
        field: 'UserEmail',
        headerName: 'User Email',
        width: 200,
        renderCell: (params) => (
            <div>
            {params.row.userId.email}
              </div>
          ),
      },  
  ];

  return (
    <div>
      <div className="m-8">
        <div className="flex justify-between mb-4">
          <div>
            <h2 className='text-3xl font-bold '>Bookings</h2>
            <p className='text-xl'>Total Bookings: {Bookings.length} </p>
          </div>
        
        </div>
        <div style={{ height: 350, width: '100%', }}>
          <DataGrid
            rows={Bookings}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            getRowId={(row) => row._id}
            pageSizeOptions={[5, 10]}
             sx={{
            boxShadow: 2,
          
           
           
          
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
          />
        </div>
      </div>
    </div>
  );
}

export default Bookings;