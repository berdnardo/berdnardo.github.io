import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Content from '../components/content'
import '../assets/css/Profile.css'



function Profile() {

  return (
    <div className='Principal'>
      <div className='Header'><Header/></div>
      <div className='Content'><Content/></div>
      <div className='Footer'><Footer/></div>      
    </div>
    
  )

}

export default Profile