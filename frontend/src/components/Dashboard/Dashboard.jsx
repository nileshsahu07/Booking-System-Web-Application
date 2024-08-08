import TopNav from './TopNav'
import SideNav from './SideNav'
import { Outlet} from 'react-router-dom'

function Dashboard() {
  return (
    <div className='flex h-screen bg-gray-100'>
        <SideNav/>
        <div className='flex-1'>
      <TopNav/>
      <main className="flex-1">
      <Outlet/>
      </main>
      </div>
    </div>
  )
}

export default Dashboard