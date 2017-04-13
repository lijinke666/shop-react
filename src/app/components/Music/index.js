import React from 'react'
import {Toast,Card} from 'antd-mobile'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"     //绑定action的函数
import { getMusicData } from "./action"
import {Link} from "react-router"

@connect(
  ({MusicAction}) => ({
     data:MusicAction.musicData
  }),
  (dispatch) => (
    bindActionCreators({
      getMusicData
    }, dispatch)
  )
)
export default class Music extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { data } = this.props;
    return (
      <div className="music-root" key="music">
        {
          data.length > 0
            ? <div className="section padding" key="items">
              {
                data.map(item => {
                  let { id, name, category, fans } = item
                  return (
                    <Card full className="item" key={id}>
                      <Card.Header
                        title={`姓名:${name}`}
                        thumb={"images/banner1.jpg"}
                      />
                      <Card.Body>
                        <div><Link to={`music/${id}`}>查看歌曲信息</Link></div>
                      </Card.Body>
                      <Card.Footer
                        content={`粉丝:${fans}`}
                        extra={`分类:${category}`}
                      />
                  )
                })
              }
            </div>
            :  Toast.loading("加载中..")
        }
      </div>
    )
  }
  componentWillMount() {
    this.props.getMusicData();
  }

};
