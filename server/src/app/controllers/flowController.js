const User = require("../models/user");

const newFlow = async (req, res) => {
    const {name, execution, ctr, user_token} = req.body;

   
    await User.findOneAndUpdate({userId: "teste1"}, {
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

    User.find({ userId: "teste1" }, (err, arr) => {
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
    const { user_token } = req.body;

   const flowFinded = await User.find({userId: "teste1"},{flowList: {$elemMatch: {name: 'get'}}});

   if(!flowFinded) res.status(404)

   return res.status(200).json(flowFinded);
}

const deleteFlow = async(req, res) => {
    const { user_token } = req.body;

    await User.findByIdAndRemove(user_token)
}

module.exports = {
    newFlow,
    getFlows,
    getOneFlow
}