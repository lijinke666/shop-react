import React from 'react'
import {Link} from 'react-router'
import "./styles.less"

export default class Header extends React.Component {
    static defaultProps = {
        title:"首页"
    }
    render() {
        const {title} = this.props
        return (
            <header key="header" className="header flex flex-vc">
                <div className="l box-flex-1 text-left"><Link to="/"><i className="icon icon-chanping"></i></Link></div>
                <div className="c box-flex-1 text-center"><h1>{title}</h1></div>
                <div className="r box-flex-1 text-right"><Link to="/"><i className="icon icon-chanping"></i></Link></div>
            </header>
        )
    }
}
