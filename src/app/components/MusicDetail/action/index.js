import helper from "libs/helper"
const { host, port } = helper
const DETAIL = "getMusicDetail"

export default function getMusicDetail(id){
  return async function(dispatch){
      let data = await helper.postJson('/musicDetail',{id:id})
      dispatch({
        type: DETAIL,
        data
      })
  }
}