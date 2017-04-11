import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import reducers from "reducers"

const store = createStore(
    reducers,
    compose(                   //异步处理
        applyMiddleware(thunk)
    )
)


export default store