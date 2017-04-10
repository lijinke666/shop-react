import React from "react"
import Header from "shared/components/Header"
import Footer from "shared/components/Footer"
//将所有组件包裹起来  react-router 会根据对应路由加载对应组件
export default class Root extends React.Component {
  render() {
    return (
      <div>
      <Header/>
      {this.props.children}
      <Footer/>
      </div>)
  }
}