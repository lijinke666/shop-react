import React from 'react'
import { Link,IndexLink } from "react-router"
import "./styles.less"

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="section flex text-center flex-vc flex-hc">
                <Link to="/" className="box-flex-1">
                    <div className="icon icon-dianhua active"></div>
                    <span className="active">首页</span>
                </Link>
                <Link to="/music" className="box-flex-1">
                    <div className="icon icon-liwu"></div>
                    <span>音乐</span>
                </Link>
                <Link to="/about" className="box-flex-1">
                    <div className="icon icon-ditu"></div>
                    <span>关于</span>
                </Link>
                <Link to="/game" className="box-flex-1">
                    <div className="icon icon-nikoqianbi"></div>
                    <span>游戏</span>
                </Link>
            </footer>
        )
    }
}