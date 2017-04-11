import React from 'react'
import { Link,IndexLink } from "react-router"
import "./styles.less"

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="section flex text-center flex-vc flex-hc">
                <IndexLink to="/" activeClassName={"active"} className="box-flex-1">
                    <div className="icon icon-dianhua"></div>
                    <span>首页</span>
                </IndexLink>
                <Link to="/music" activeClassName={"active"} className="box-flex-1">
                    <div className="icon icon-liwu"></div>
                    <span>音乐</span>
                </Link>
                <Link to="/about" activeClassName={"active"} className="box-flex-1">
                    <div className="icon icon-ditu"></div>
                    <span>关于</span>
                </Link>
                <Link to="/game" activeClassName={"active"} className="box-flex-1">
                    <div className="icon icon-nikoqianbi"></div>
                    <span>游戏</span>
                </Link>
            </footer>
        )
    }
}