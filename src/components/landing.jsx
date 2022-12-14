import React from 'react'
import '../styles/landing.css'
import Card from './card'

function LandingPage() {
  return (
    <div>
        <div className="first">
            <h1>Check What You Code!</h1>
            <p>Use our online Code Checker to debug your code before you make your next commit. <br/>Push into development like a pro!</p>
            <img className="land-img" src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." width="800px" height="400px"/>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam ipsam distinctio corporis tenetur omnis. Ab provident officia culpa quos voluptatem odio expedita dolor voluptate, beatae fugit ea praesentium a, nihil illum minus ducimus! Fuga minus assumenda, quo exercitationem laudantium nobis expedita sint aut officiis sed! Doloremque at voluptate asperiores corrupti dignissimos, vitae quasi sapiente perferendis magnam sunt fugit, consequatur tempore dolorem nihil, dolore ab debitis iure ipsam. Ipsam, repudiandae!</p> */}
        </div>

        <div className="second">
            

            <Card imgUrl="https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=600" title="No More Bugs"></Card>
            <Card imgUrl="https://images.pexels.com/photos/714701/pexels-photo-714701.jpeg?auto=compress&cs=tinysrgb&w=600" title="Quick Results"></Card>
            <Card imgUrl="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600" title="Take The Next Step"></Card>   

        </div>

        <div className="footer"></div>
    </div>
  )
}

export default LandingPage