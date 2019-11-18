import React, { Component } from "react";
import { Query } from "react-apollo";
import { BookCreator } from "./BookCreator";
import { book } from "./clientQueries";

export class BookEditor extends Component {

    render = () => 
        <Query query={ book } variables={ {id: this.props.match.params.id} } >
            { ({ loading, data }) => {
                if (!loading) {
                    return <BookCreator {...this.props } book={data.book} 
                        mode="edit" />
                }
                return null;
            }}
        </Query>
}
