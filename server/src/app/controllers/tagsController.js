const User = require("../models/user");

const createTagsForUser = async (req, res) => {
    try {
        const {userToken, tags} = req.body

        if(!userToken || !tags) return res.status(400).json({message: 'É nessecario informar o token e a tag'});

        await User.findOneAndUpdate(
            {userId: userToken},
            {$push: { tags: tags }}, 
            (err, arr) => {
               if(err) return res.status(500).json({message: 'Erro interno'});

               return res.json(arr);
            }
            )
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message: 'Erro interno'});
    }
}

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
    createTagsForUser,
}