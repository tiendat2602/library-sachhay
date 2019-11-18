import gql from "graphql-tag";


export const booksList = gql`
    query($page: Int, $pageSize: Int, $sort: String) {
        books {
            totalSize, 
            books(page: $page, pageSize: $pageSize, sort: $sort) {
                id, title, author, cateName, bookImage, cateSlug,bookSlug, description
            }
        }
    }`

export const book = gql`
    query($id: ID!) {
        book(id: $id) {
            id, title, author, cateName, bookImage,cateSlug,bookSlug description
        }
    }`