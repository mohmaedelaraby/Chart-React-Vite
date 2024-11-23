import React, { useEffect } from 'react'
import useChartsData from '../hooks/useChartsData'

function HomePage() {
    const{ChartsDataData,ChartsDataRefetch,isChartsDataLoading}=useChartsData()
    useEffect(()=>{
        ChartsDataRefetch() 
        console.log(ChartsDataData?.data)
    },[])
  return (
    <div>
      {
        !isChartsDataLoading? 'fetch' : 'loading.....'
      }{
       ChartsDataData?.data.map((item)=>(
        <div>{item?.value}</div>
       ))
      }
    </div>
  )
}

export default HomePage
