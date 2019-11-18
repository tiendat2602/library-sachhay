import React, { Component } from "react";
import { ValidatedForm } from "./ValidatedForm";
import { Mutation } from "react-apollo";
import { storeBook, updateBook } from "./clientMutations";

export class BookCreator extends Component {

    constructor(props) {
        super(props);
        this.defaultAttrs = { type: "text", required: true };
        this.formModel = [
            { name:"title", label: "Tên" },
            { name:"author", label: "Tác Giả"},
            { name:"cateName", label: "Thể Loại" }, 
            { name:"bookImage", label: "Ảnh Bìa" },
            { name:"cateSlug", label:"cateSlug"},
            { name:"bookSlug", label:"bookSlug"},
            { name:"description", label: "Miêu Tả" }, 
        ];
        this.mutation = storeBook;
        if (this.props.mode === "edit" ) {
            this.mutation = updateBook;
            this.formModel = [ { name:"id", label: "Id", attrs: { disabled: true }},  
                     ...this.formModel]
                .map(item => ({ ...item, attrs: { ...item.attrs, 
                    defaultValue: this.props.book[item.name]} }));
        }
    }

    navigate = () => this.props.history.push("/admin/books");
    
    render = () => {
        return <div className="container-fluid">
            <div className="row m-2">
                <div className="col bg-info text-white text-center">
                    <h1>Cập nhật thông tin đầu sách</h1>
                </div>
            </div>        
            <div className="row">
                <div className="col m-2">
                    <Mutation mutation={ this.mutation }>
                        { (saveMutation, {client }) => {
                            return <ValidatedForm formModel={ this.formModel } 
                                defaultAttrs={ this.defaultAttrs } 
                                submitCallback={ data => { 
                                    saveMutation({variables: { book: 
                                        { ...data }}});
                                    if (this.props.mode !== "edit" ) {
                                        client.resetStore();
                                    }
                                    this.navigate();
                                }} 
                                cancelCallback={ this.navigate } 
                                submitText="Lưu" cancelText="Hủy" />
                        }}
                    </Mutation>        
                </div>    
            </div>        
        </div>        
    }
}