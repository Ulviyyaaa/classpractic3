import React from 'react'
import OurPortfolio from './OurPortfolio'
import OurTeam from './OurTeam'
import ServicesSec from './ServicesSec'
import Welcome from './Welcome'

function HomePageComponents() {
  return (
    <div>
        <Welcome/>
        <ServicesSec/>
        <OurPortfolio/>
        <OurTeam/>
    </div>
  )
}

export default HomePageComponents