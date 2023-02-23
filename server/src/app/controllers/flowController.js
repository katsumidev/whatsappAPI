const User = require("../models/user");

const newFlow = async (req, res) => {
    const {name, execution, ctr, user_token} = req.body;

   
    await User.findOneAndUpdate({userId: user_token}, {
        $push: {
            flowList: {
                name,
                execution,
                ctr
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
    const { user_token } = req.body;

    User.find({ userId: user_token }, (err, arr) => {
        arr.forEach((items) => {
          flow = items.flowList;
    
          let array = flow.map((item) => {
            return {
              name: item.name,
              execution: item.execution,
              ctr: item.ctr,
              createdAt: item.createdAt
            };
          });
          return res.send(array);
        });
      });
}

const getOneFlow = async (req, res)  => {
    const { user_token, nameFlow } = req.body;

   const flowFinded = await User.find({userId: user_token},{flowList: {$elemMatch: {name: nameFlow}}});

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
    const { user_token, nameFlow } = req.body;

    User.find({ userId: user_token }, (err, arr) => {
        arr.forEach((items) => {
          User.findOneAndUpdate(
            { name: nameFlow },
            {
              $pull: { flowList: { name: nameFlow } },
            },
            { new: true },
            (err, arr) => {
              if (arr) {
                return res.status(200).send("flow deletado deletado");
              }
            }
          );
        });
      });
}

module.exports = {
    newFlow,
    getFlows,
    getOneFlow,
    deleteFlow,
    updateFlow
}