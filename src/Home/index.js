import React from 'react'
import {Carousel} from 'antd-mobile'
import { Link } from "react-router"

import "./styles.less"

export default class Home extends React.Component {
  render() {
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
                    <img src={require("images/banner1.jpg")} style={{height:carouselHeight}} alt=""/>
                    <img src={require("images/banner2.jpg")} style={{height:carouselHeight}} alt=""/>
                    <img src={require("images/banner3.jpg")} style={{height:carouselHeight}} alt=""/>
             </Carousel>
        </section>
    )
  }
}
