const paginateQuery = (query, page = 1, pageSize = 5) => 
    query.drop((page - 1) * pageSize).take(pageSize);

const book = ({id}, {db}) => db.get("books").getById(id).value();

const books = ({ cateName }, { db}) => ({
    totalSize: () => db.get("books")
        .filter(p => cateName ? new RegExp(cateName, "i").test(p.cateName) : p)
        .size().value(),
    books: ({page, pageSize, sort}) => {
        let query = db.get("books");
        if (cateName) {
            query = query.filter(item => 
                new RegExp(cateName, "i").test(item.cateName))
        }
        if (sort) { query = query.orderBy(sort) }
        return paginateQuery(query, page, pageSize).value();
    }
})
            
const categories = (args, {db}) => db.get("categories").value();



module.exports = { book, books, categories}