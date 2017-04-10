import React from 'react'
import Header from "shared/components/Header"
import Footer from "shared/components/Footer"
import Carousel from 'antd-mobile/lib/carousel'
import { Link } from "react-router"

import "antd-mobile/lib/carousel/style"
import "./styles.less"

export default class Home extends React.Component {
  render() {
    const arr = [...new Array(12)];
    const carouselHeight = 180
    return (
        <section className="header-margin">
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
        </section>
    )
  }
}
