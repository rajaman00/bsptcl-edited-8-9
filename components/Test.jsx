import React from 'react'
import '../components/css/test.css'
import NewImage from '../public/images/NotificationImages/new.gif'
import whatsnew from '../public/images/NotificationImages/text.gif'

function Test() {
  return (
    <div className='test'>
      <div style={{ display: 'flex', position: 'relative', width: '38%' }}>
        <div style={{ color: "white", backgroundColor: "#0bafec", padding: '4px',display:'flex', alignItems:'center', width: '100%' }}><h5 style={{ marginLeft: '30%' }}>What's New?</h5></div>
        <div className="leftCrossEffect"></div>
      </div>
      <div className="scrolling-text-container">
        <div className="scrolling-text marqueeAnimation-37574610">
          <li>News 1: Notice Board. Some placeholder text. And some more text. <img src={NewImage} alt="" /> </li>
          <li>News 2: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 3: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 4: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 5: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 6: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 7: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>

          
        </div>
        
      </div>
      {/* <div style={{ position: 'relative', display: 'flex' }}>
        <div style={{ color: "white", backgroundColor: "#2f2963", zIndex: '2', padding: '4px', }}><h4 style={{ marginLeft: '5px' }}>More Links</h4></div>
         <div className="rightCrossEffect"></div> 
      </div> */}
    </div>
  )
}

export default Test;