import React from 'react'
import "./styles.less"

export default class Header extends React.Component {
    state = {
        value:""
    }
    render() {
        return (
            <div key="header" className="header">
                <div className="fake_head">
                    <div className="title"><span>&#xe667;</span>配件商城</div>
                    <div className="more">&#xe60e;</div>
                </div>
                <div className="head">
                    <div className="logo_img"><img src={require('images/logo.png')} /></div>
                    <div className="seek">
                        <input type="text" placeholder="请输入您要搜索的商品" onChange={this.onChange} />
                        <div className="icon" onClick={this.search}><span>&#xe602;</span></div>
                    </div>
                </div>
            </div>
        )
    }
    onChange = (e)=>{
        this.setState({
            value:e.target.value
        })
    }
    search = ()=>{
        const {value} = this.state;
        alert(value)
    }
}
