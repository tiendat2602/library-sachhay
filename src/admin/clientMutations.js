import gql from "graphql-tag";


export const storeBook = gql`
    mutation($book: bookStore) {
        storeBook(book: $book) {
            id, title, author, cateName, description, bookImage, cateSlug, bookSlug
        }
    }`

export const updateBook = gql`
    mutation($book: bookUpdate) {
        updateBook(book: $book) {
            id, title, author, cateName, description, bookImage, cateSlug, bookSlug
        }
    }`

export const deleteBook = gql`
    mutation($id: ID!) {
        deleteBook(id: $id) {
            id
        }
    }`