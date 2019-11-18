import { graphql, compose } from "react-apollo";
import { BooksTable } from "./BooksTable";
import { booksList } from "./clientQueries";
import { deleteBook } from "./clientMutations";

const vars = {
    page: 1, pageSize: 10, sort: "id"
}

export const ConnectedBooks = compose(
    graphql(booksList,
        {
            options: (props) => ({ variables: vars }),
            props: ({data: { loading, books, refetch }}) => ({
                totalSize: loading ? 0 : books.totalSize,
                books: loading ? []: books.books,
                currentPage: vars.page,
                pageCount: loading ? 0 
                    : Math.ceil(books.totalSize / vars.pageSize),
                navigateToPage: (page) => { vars.page = Number(page); refetch(vars)},
                pageSize: vars.pageSize,            
                setPageSize: (size) => 
                    { vars.pageSize = Number(size); refetch(vars)},
                sortKey: vars.sort,
                setSortProperty: (key) => { vars.sort = key; refetch(vars)},
            })
        }
    ),
    graphql(deleteBook, 
        {
            options: {
                update: (cache, { data: { deleteBook: { id }}}) => {
                    const queryDetails = { query: booksList, variables: vars };
                    const data = cache.readQuery(queryDetails)
                    data.books.books = 
                        data.books.books.filter(p => p.id !== id);
                    data.books.totalSize = data.books.totalSize - 1;
                    cache.writeQuery({...queryDetails, data });
                }
        },
        props: ({ mutate }) => ({
            deleteBook: (id) => mutate({ variables: { id }})
        })
    })
)(BooksTable);