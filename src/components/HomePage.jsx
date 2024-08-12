import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Status from './cards/Status'
import Orders from './cards/Orders'
import Feedback from './cards/Feedback'
import BarChartCard from './cards/BarChartCard'
import NetProfitCard from './cards/NetProfitCard'
import Details from './cards/Details'

const HomePage = () => {
 
  return (
    <div className="h-full bg-gray-900 text-gray-100 pb-4">
      <Header/>
      <main className='md:pl-20 pl-4 pr-4'>
      <Sidebar/>
      <h1 className='font-bold uppercase text-lg mb-4'>Dashboard</h1>  
        <div className='flex flex-wrap md:flex-nowrap gap-4 w-full'>
        <Status />
        <NetProfitCard/>
        </div>
        <div className='flex flex-wrap md:flex-nowrap gap-4 w-full'>
        <BarChartCard /> 
        <Details/>
        </div>
        <div className='flex flex-wrap xl:flex-nowrap gap-4 w-full'>
        <Orders/>
        <Feedback/>
        </div>
    </main>
    </div>
  )
}

export default HomePage

{/* <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
</svg> */}