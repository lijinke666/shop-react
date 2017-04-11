import React from "react"
import ReactDOM from "react-dom"
import { AppContainer as HotLoader } from "react-hot-loader"     //react-hot-loader  热更新可以保存状态  
import { Provider } from "react-redux"
import FastClick from "fastclick"

import App from "app"
import store from "store"

FastClick.attach(document.body)     //解决移动端300ms延迟问题

const render = ( Component ) => {
    ReactDOM.render(
        <HotLoader>
            <Provider store={store}>
                <Component/>
            </Provider>
        </HotLoader>,
        document.getElementById('root')
    )
}
render(App)
//webpack内置对象
if (module.hot) {
    module.hot.accept("app", () => {
        render(App)
    });
}
