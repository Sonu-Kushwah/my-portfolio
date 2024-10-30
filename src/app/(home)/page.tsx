import React from 'react'
import HomeBanner from './home-banner'
import ServiceComponent from '@/component/service'
import Skills from '@/component/skills'
import Education from '@/component/education'
import Portfolio from '@/component/portfolio'

function Home() {
  return (
    <div>
      <HomeBanner/>
      <ServiceComponent/>
      <Skills/>
      <Portfolio/>
      <Education/>
    </div>
  )
}

export default Home