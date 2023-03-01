const User = require("../models/user");

const createTagsForContact = async (req, res) => {
    try {
        const {userToken, contactNumber, tags} = req.body

        console.log(userToken, contactNumber, tags)


        await User.findOneAndUpdate(
            { userId: userToken, "contactList.phoneNumber": contactNumber },
            { $push: { "contactList.$.tags": tags } },
            { new: true },
            (err, user) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(user.contactList);
            }
        );
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    createTagsForContact,
}