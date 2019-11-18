import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PaginationControls } from "../PaginationControls";
import { BooksRow } from "./BooksRow";

export class BooksTable extends Component {

    render = () =>     
         <div>
            <h4 className="bg-info text-white text-center p-2">
                { this.props.totalSize } Đầu Sách
            </h4>

        <PaginationControls keys={["ID", "Title", "cateName"]}
            { ...this.props } />

        <table className="table table-sm table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Tác Giả</th>
                    <th>Thể Loại</th>
                    <th>Ảnh Bìa</th>
                    <th className="text-center">Cập Nhật</th>
                </tr>
            </thead>
            <tbody>
                { this.props.books.map(bo => 
                    <BooksRow key={ bo.id} book={ bo }
                        deleteBook={ this.props.deleteBook } />
                )}
            </tbody>
        </table>
        <div className="text-center">
            <Link to="/admin/books/create" className="btn btn-primary">
                Tạo mới
            </Link>
        </div>
    </div>                   
}