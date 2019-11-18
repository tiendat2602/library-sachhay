import React, { Component } from "react";
import  ApolloClient from "apollo-boost";
import { ApolloProvider} from "react-apollo";
import { GraphQlUrl } from "../data/Urls";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { ConnectedBooks } from "./BooksAdminConnector";
import { BookEditor } from "./BookEditor";
import { BookCreator } from "./BookCreator";
import { AuthPrompt } from "../auth/AuthPrompt";
import { authWrapper } from "../auth/AuthWrapper";

export const Admin =authWrapper( class extends Component {

	constructor(props) {
        super(props);
        this.client = new ApolloClient({
            uri: GraphQlUrl,
            request: gqloperation => gqloperation.setContext({
                headers: {
                    Authorization: `Bearer<${this.props.webToken}>`
                },                
            })
        })
    }

    render() {
        return <ApolloProvider client={ this.client }>
            <div className="container-fluid">
             <div className="row">
                <div className="col bg-info text-white d-flex">
                    <div className="navbar-brand">
                    	<Link to="/" className="text-white font-weight-bold">
                    		Sachhay.com
                    	</Link>
                    </div>
	                    { this.props.isAuthenticated &&
	                        <button onClick={ this.props.signout }
	                            className="btn btn-sm btn-danger text-white ml-auto m-2">
	                            Đăng Xuất
	                        </button>
	                 	} 
                	</div>
            </div>        
            <div className="row">
                <div className="col-12 p-2">
                    <Switch>
                        { 
                            !this.props.isAuthenticated && 
                                <Route component={ AuthPrompt } />
                        }
                        <Route path="/admin/books/create" 
                            component={ BookCreator} />                        
                        <Route path="/admin/books/:id" 
                            component={ BookEditor} />
                        <Route path="/admin/books" 
                            component={ ConnectedBooks } />
                        <Redirect to="/admin/books" />
                    </Switch>
                </div>
            </div>
        </div>            
        </ApolloProvider>
    }
})