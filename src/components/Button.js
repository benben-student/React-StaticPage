import React from "react";
import classNames from "classnames";
class Button extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        const { children, btnType } = this.props
        console.log(btnType);
        let className=""
        if (btnType === "primary") {
            className = "antdm-btn antdm-btn-primary-bg"
        } else {
            className = "antdm-btn"
        }

        return (
            <button className={className}>{children}</button>
        )
    }
}
export default Button