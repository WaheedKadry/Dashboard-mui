import React from 'react'
import Geo from './Geo'
import Header from '../../Components/Header'

const Geography = () => {
  return (
    <>
       <Header
        title="Geography"
        subTitle="Simple Geography Chart"
      />
    <Geo height={"75vh"}/>
    </>
  )
}

export default React.memo(Geography)
