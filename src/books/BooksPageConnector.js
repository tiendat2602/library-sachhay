import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../data/ActionCreator";

const mapStateToProps = dataStore => dataStore;
const mapDispatchToProps = { setPageSize, setSortProperty };

const mergeProps = (dataStore, actionCreators, router) => ({
    ...dataStore, ...router, ...actionCreators,
    currentPage: Number(router.match.params.page),
    pageCount: Math.ceil((dataStore.books_total 
        | dataStore.pageSize || 5)/(dataStore.pageSize || 5)),
    navigateToPage: (page) => router.history
        .push(`/${router.match.params.category}/${page}`),    
})

export const BookPageConnector = (PageComponent) => 
    withRouter(connect(mapStateToProps, mapDispatchToProps, 
        mergeProps)(PageComponent))