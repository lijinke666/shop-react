import React from 'react'
import { Link,IndexLink } from "react-router"
import "./styles.less"

export default class Footer extends React.Component {
    render() {
        return (
            <footer key="footer" className="footer">
                <ul className="none list">
                    <li>
                    <IndexLink href="/" activeClassName="tab-active">
                        <div>
                            <span><i className="iconfont icon-shouye"></i></span>
                            <p>首页</p>
                        </div>
                    </IndexLink>
                    </li>
                    <li>
                        <div>
                            <span><i className="iconfont icon-chanpin"></i></span>
                            <p>产品</p>
                            <Link href="/about" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <span><i className="iconfont icon-gouwuche"></i></span>
                            <p>购物车</p>
                            <Link href="#" />
                        </div>
                        <div className="bar">+3</div>
                    </li>
                    <li>
                        <div>
                            <span><i className="iconfont icon-kefu"></i></span>
                            <p>客服</p>
                            <Link href="#" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <span><i className="iconfont icon-wode"></i></span>
                            <p>我的</p>
                            <Link href="#" />
                        </div>
                    </li>
                </ul>
            </footer>
        )
    }
}