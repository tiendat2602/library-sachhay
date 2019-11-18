const storeBook = ({ book}, {db }) => 
    db.get("books").insert(book).value();

const updateBook = ({ book }, { db }) => 
    db.get("books").updateById(book.id, book).value();

const deleteBook = ({ id }, { db }) => db.get("books").removeById(id).value();

module.exports = {
    storeBook, updateBook, deleteBook
}