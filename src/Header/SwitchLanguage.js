import React, { Fragment } from "react";
import './index.css'
const { Provider, Consumer } = React.createContext()
//英文
const English = {
    language: "中文",
    guide: "guide",
    assembly: "assembly",
    resources: "resources",
    oldVersion: "oldVersion",
    PublishLog: "PublishLog",
    backgroundColor: "white"
}
//中文
const Chinese = {
    language: "English",
    guide: "指南",
    assembly: "组件",
    resources: "资源",
    oldVersion: "返回旧版",
    PublishLog: "发布日志",
    backgroundColor: "black"
}
class SwitchLanguage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Chinese
        }
    }
    switchLanguage = () => {
        const language = this.state.data === Chinese ? English : Chinese
        this.setState({
            data: language
        })
    }
    render() {
        return (
            <Provider value={this.state.data}>
                <span className="header-right-button">
                    <button onClick={this.switchLanguage} className="header-right-button-button-a">{this.state.data.language}</button>
                </span>
                <Header />
            </Provider>
        )
    }
}
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    handleClickValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        const textColor = {
            fontSize: "12px",
            color: "#a8a8ad"
        }
        const textSize = {
            fontSize: "17px",
        }
        return (
            <Fragment>
                <div className="header-left">
                    <div><a><img height="50px" width="auto" src="https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg" /></a></div>
                    <div><p style={textSize}>Antd Design Mobile</p></div>
                    <div><p style={textColor}>v5.21.0</p></div>
                    <div>
                        <input className="header-input" type="search" value={this.state.inputValue} onChange={this.handleClickValue} />
                        <span className="iconfont icon-shurukuangsousuo"></span>
                    </div>
                    <Consumer>
                        {
                            data => (
                                <div className="header-right">
                                    <span>{data.guide}</span>
                                    <span>{data.assembly}</span>
                                    <span>{data.resources}</span>
                                    <span>{data.oldVersion}</span>
                                    <span className="header-right-span">{data.PublishLog}<span className="iconfont icon-zhuanfa"></span></span>
                                    <span className="header-right-span">GitHub<span className="iconfont icon-zhuanfa"></span></span>
                                </div>

                            )
                        }
                    </Consumer>
                    <button onClick={this.handleBackground} className="header-right-button-button-b">
                        <span className="iconfont icon-taiyangtianqi"></span>
                    </button>
                </div>
            </Fragment>
        )
    }
}
export default SwitchLanguage