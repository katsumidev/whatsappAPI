const User = require("../models/user");

const createTagsForUser = async (req, res) => {
    try {
        const { userToken, tags } = req.body;
        const { name, description } = tags;

        await User.findOneAndUpdate(
            { userId: userToken },
            { $push: { tags: {
                    name: name, 
                    description: description
                } 
                } 
             },
            (err, arr) => {
                if (err) res.status(500).json({ message: 'Erro interno' });

                res.status(200).json(arr);
            }
        );
    } catch (error) {
        console.log(error.message);
    }
};

const getAllTags = async (req, res) => {
    try {
        const {userToken} = req.body

      const tags = await User.find({userId: userToken}, { tags: 1 });
      return res.json(tags);
    } catch (error) {
      console.log(error.message);
    }
  };

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

const deleteTagForContact = async (req, res) => {
    try {
        const {userToken, contactNumber, tags} = req.body
        const {name, description} = tags

        await User.findOneAndUpdate(
            { userId: userToken, "contactList.phoneNumber": contactNumber },
            { $pull: {'contactList.$.tags': { name: name, description: description } }},
            { new: true },
            (err, user) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(user.contactList);
            }
        );

        console.log(userToken, contactNumber, tags)
    } catch (error) {
        console.log(error.message)
    }
}

const getAllTagsForContact = async() => {

}

const updateTagsForUser = async (req, res) => {
    try {
        const {userToken, tag} = req.body;
        const {_id, name, description} = tag;

        const updatedUser = await User.findOneAndUpdate(
            { userId: userToken, 'tags._id': _id },
            { $set: { 'tags.$.name': name, 'tags.$.description': description } },
            { new: true }
          );
          res.json(updatedUser);
        
    } catch (error) {
        console.log(error.message)
    }
}

const deleteTagForUser = async (req, res) => {
    try {
        const {userToken, tag} = req.body;
        const {name, description} = tag;

        User.findOneAndUpdate(
            { userId: userToken },
            { $pull: { tags: { name: name, description: description } } },
            { new: true },
            (err, arr) => {
              if (err) {
                console.log("Erro ao atualizar o documento:", err);
              } 

              res.status(200).json(arr)
            }
          );
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'erro interno'})
    }
}

module.exports = {
    createTagsForContact,
    createTagsForUser,
    getAllTags,
    updateTagsForUser,
    deleteTagForUser,
    deleteTagForContact
}