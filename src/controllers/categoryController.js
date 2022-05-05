// controller actions
const CategorySchema = require("../db/categorySchema");



module.exports.getCategories_get = async (req, res, next) => {
    try {

        const list = await CategorySchema.find().select({
            _id: 0,
            __v: 0,
        }).exec();
        res.statusCode = 200;

        res.send({ status: 200, data: list, message: 'Success' })
    } catch (err) {
        res.statusCode = 400;
        res.send({ status: 400, message: err })
    }
    next()

}

module.exports.createCategory_post = async (req, res, next) => {
    try {
        const { name } = req.body;
        await CategorySchema.create({ name });
        res.send({
            status: 200,
            message: 'Success',
        });
    } catch (err) {
        console.log(err)
        res.statusCode = 400;
        res.send({ status: 400, message: err })
    }
    next()
}

module.exports.updateCategory_post = async (req, res, next) => {
    try {
        const { oldCategory, newCategory } = req.body;
        await CategorySchema.findOneAndUpdate({ name: oldCategory }, { name: newCategory })

        res.send({
            status: 200,
            message: 'Success',
        });
    } catch (err) {
        console.log(err)
        res.statusCode = 400;
        res.send({ status: 400, message: err })
    }
    next()
}

module.exports.deleteCategory_delete = async (req, res, next) => {
    try {
        const { name } = req.body;
        await CategorySchema.deleteOne({ name });
        res.send({
            status: 200,
            message: 'Success',
        });
    } catch (err) {
        console.log(err)
        res.statusCode = 400;
        res.send({ status: 400, message: err })
    }
    next()
}
