import React from 'react'
import InternationCard from '../../../Components/InternationalCard/InternationCard'
import NationalCard from '../../../Components/NationalCard/NationalCard'
import Navbar from '../../../Components/Navbar/Navbar'

const Pricing = () => {
  return (
    <>
      <Navbar/>
      <div className=' w-[100%] md:h-[780px]  no:px-[15px] md:px-[30px] py-[30px] flex no:flex-col md:flex-row justify-between items-center flex-wrap'>
        <NationalCard/>
        <InternationCard/>
      </div>
    </>
  )
}

export default Pricing
