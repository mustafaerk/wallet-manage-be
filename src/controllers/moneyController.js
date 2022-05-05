// controller actions
const MoneySchema = require("../db/moneySchema");

const { v4: uuidv4 } = require("uuid");

module.exports.createNewTransaction_post = async (req, res, next) => {
    try {
        const { name, categoryName, date, price, description, type } = req.body;

        const data = {
            id: uuidv4(),
            name,
            categoryName,
            date,
            price,
            description,
            type,
        }

        await MoneySchema.create(data);
        res.send({
            status: 200,
            message: 'Success',
        });
    } catch (err) {
        res.statusCode = 400;
        res.send({ status: 400, message: err })
    }
    next()

}

module.exports.getAllIncomes_get = async (req, res, next) => {
    try {
        const list = await MoneySchema.find({ type: 1 }).select({
            _id: 0,
            __v: 0,
            type: 0,
        }).exec();
        res.statusCode = 200;

        res.send({ status: 200, data: list, message: 'Success' })
    } catch (err) {
        res.statusCode = 400;
        res.send({ status: 400, message: err })
    }
    next()
}

module.exports.getAllOutgoing_get = async (req, res, next) => {
    try {
        const list = await MoneySchema.find({ type: 2 }).select({
            _id: 0,
            __v: 0,
            type: 0,
        }).exec();
        res.statusCode = 200;

        res.send({ status: 200, data: list, message: 'Success' })
    } catch (err) {
        res.statusCode = 400;
        res.send({ status: 400, message: err })
    }
    next()
}

module.exports.getAllTransaction_get = async (req, res, next) => {
    try {
        const list = await MoneySchema.find().select({
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

module.exports.deleteTransaction_delete = async (req, res, next) => {
    try {
        const { id } = req.body;
        await MoneySchema.deleteOne({ id: id })
        res.statusCode = 200;

        res.send({ status: 200, message: 'Success' })
    } catch (err) {
        console.log(err)
        res.statusCode = 400;
        res.send({ status: 400, message: err })
    }
    next()
}

module.exports.updateTransaction_post = async (req, res, next) => {
    try {
        const { id, categoryName, date, description, name, price } = req.body;
        await MoneySchema.findOneAndUpdate({ id: id }, { id, categoryName, date, description, name, price })
        res.statusCode = 200;
        res.send({ status: 200, message: 'Success' })
    } catch (err) {
        console.log(err)
        res.statusCode = 400;
        res.send({ status: 400, message: err })
    }
    next()
}
