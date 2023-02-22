const User = require("../models/user");

const createMapFlow = async (req, res) => {
    const {data} = req.body

    console.log(JSON.stringify(data));
}

module.exports = {
    createMapFlow,
}