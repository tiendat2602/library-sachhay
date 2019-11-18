import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BooksRow extends Component {
    
    render = () => 
        <tr>
            <td>{ this.props.book.id }</td>
            <td>{ this.props.book.title }</td>
            <td>{ this.props.book.author }</td>
            <td>{ this.props.book.cateName }</td>
            <td>{ this.props.book.bookImage }</td>
            <td className="text-center">
                <button className="btn btn-sm btn-danger mx-1" 
                    onClick={ () => 
                        this.props.deleteBook(this.props.book.id) }>
                            Xóa
                </button>
                <Link to={`/admin/books/${this.props.book.id}`}
                    className="btn btn-sm btn-warning">
                        Chỉnh sửa
                </Link>
            </td>
        </tr>
}