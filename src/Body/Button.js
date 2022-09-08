import React from "react";
class Button extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <>
            
                <button className="bodypage-span-div-button-buttonA">开始使用</button>
                <button className="bodypage-span-div-button-buttonB">组件列表</button>
            </>
        )
    }
}
export default Button