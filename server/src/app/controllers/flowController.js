const User = require("../models/user");

const newFlow = async (req, res) => {
    const {data} = req.body;

    console.log(data)
    await User.findOneAndUpdate({userId: data.userToken}, {
        $push: {
            flowList: {
                name: data.name,
                execution: data.execution,
                ctr: data.ctr
            }
        }
    })
    .then(() => {
        console.log('Flow Salvo');
        return res.status(200)
    })
    .catch((err) => console.log(err));
} 

const getFlows = async (req, res) => {
    const { userToken } = req.body;
    console.log(userToken)

    User.find({ userId: userToken }, (err, arr) => {
        arr.forEach((items) => {
          flow = items.flowList;
    
          let array = flow.map((item) => {
            return {
              _id: item._id,
              name: item.name,
              execution: item.execution,
              ctr: item.ctr,
              createdAt: item.createdAt
            };
          });
          console.log(JSON.stringify(array))
          return res.json(array);
        });
      });
}

const getOneFlow = async (req, res)  => {
    const { userToken, nameFlow } = req.body;

   const flowFinded = await User.find({userId: userToken},{flowList: {$elemMatch: {name: nameFlow}}});

   if(!flowFinded) res.status(404)

   return res.status(200).json(flowFinded)
}

const updateFlow = async(req, res) => {
    const { user_token, nameFlow, newName } = req.body;

    await User.findOneAndUpdate({"flowList.name": nameFlow}, {
        $set: {
            'flowList.$.name': newName
        }
    })
    .then(() => {
        console.log('Flow atualizado');
        return res.status(200)
    })
    .catch((err) => console.log(err));
    
}

const deleteFlow = async(req, res) => {
    const { userToken, flowId } = req.body;
    try {
      await User.findOneAndUpdate(
        {userId: userToken},
        { $pull: { flowList: { _id: { $in: [flowId] } } } },
        { new: true }
      );
      console.log('foi')
    } catch (error) {
      console.error(error);
    }
};


module.exports = {
    newFlow,
    getFlows,
    getOneFlow,
    deleteFlow,
    updateFlow,
}