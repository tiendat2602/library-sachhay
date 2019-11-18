var faker = require("faker");
var data = [];
var categories = ["Tâm Lý - Kỹ Năng Sống","Kinh Tế - Quản Lý",
            "Marketing - Bán hàng", "Y Học - Sức Khỏe",
            "Học Ngoại Ngữ","Khoa Học - Kỹ Thuật"];
faker.seed(100);
for (let i = 1; i <= 503; i++) {
    var category = faker.helpers.randomize(categories);
    var fname = faker.name.firstName();
    var sname = faker.name.lastName();
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        author: `${fname} ${sname}`,
        image: `${i.toString()}.jpg`,
        description:`${faker.lorem.sentence(50)}`
    })
}

module.exports = function () {
    return {
        categories: categories,
        books: data        
    }
}