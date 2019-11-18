import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { authWrapper } from "./AuthWrapper";
import { ValidatedForm } from "../admin/ValidatedForm";

export const AuthPrompt = withRouter(authWrapper(class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null
        }
        this.defaultAttrs = { required: true };
        this.formModel = [
            { name:"username", label: "Tài Khoản", attrs: { defaultValue: "admin"}}, 
            { name:"password", label: "Mật Khẩu", attrs: { type: "password"} }, 
        ];        
    }

    authenticate = (credentials) => {
        this.props.authenticate(credentials)
            .catch(err => this.setState({ errorMessage: err.message}))
            .then(this.props.history.push("/admin"));
    }

    render = () => 
        <div className="container-fluid">
            <div className="row m-2">
                <div className="col bg-info text-white">
                    <p className="text-white text-center m-2 font-weight-bold">
                        Đăng Nhập Để Tiếp Tục
                    </p>
                </div>
            </div>        
            <div className="row">
                <div className="col m-2">
                    { this.state.errorMessage != null && 
                        <h4 className="bg-danger text-center text-white m-1 p-2">
                            { this.state.errorMessage }
                        </h4>
                    }
                    <ValidatedForm formModel={ this.formModel }
                        defaultAttrs={ this.defaultAttrs }                        
                        submitCallback={ this.authenticate }
                        submitText="Đăng Nhập"
                        cancelCallback={ () => this.props.history.push("/")}
                        cancelText="Hủy"
                    />
                </div>
            </div>
        </div>
}))