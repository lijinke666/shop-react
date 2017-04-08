import React from 'react'
import Header from "shared/components/Header"
import Footer from "shared/components/Footer"
import {Carousel} from 'antd-mobile'
import { Link } from "react-router"

import "./styles.less"

export default class Home extends React.Component {
  render() {
    const arr = [...new Array(12)];
    const carouselHeight = 180
    return (
      <div key="home">
        <Header name="李金珂" sex="男"/>
        <div className="content">
          <div className="carousel">
              <Carousel
                className="my-carousel"
                autoplay={true} 
                infinite = {true}
                selectedIndex={1}   
                autoplayInterval={4000}        
              >
                    <img src={require("images/banner1_02.jpg")} style={{height:carouselHeight}} alt=""/>
                    <img src={require("images/banner2_02.jpg")} style={{height:carouselHeight}} alt=""/>
                    <img src={require("images/banner3_02.jpg")} style={{height:carouselHeight}} alt=""/>
             </Carousel>
          </div>
          <div className="hot_nav">
            <ul key="products">    
              {
                arr.map(()=>{
                    return (
                  <li>
                    <span><i className="iconfont icon-chanping"></i></span>
                    <p>产品类1</p>
                  </li> 
                    )
                })
              }
            </ul>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
