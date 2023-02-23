const User = require("../models/user");

const createMapFlow = async (req, res) => {
    try {
      const {data, userToken, flowName} = req.body
  
      const query = { userId: userToken };
  
      const update = {
        $set: {
          'flowList.$[flow].flow': {
            nodes: data.nodes,
            edges: data.edges,
            viewport: data.viewport
          }
        }
      };
  
      const options = {
        arrayFilters: [{ 'flow.name': flowName }] 
      };
  
      await User.findOneAndUpdate(query, update, options).then(() => console.log('foi'));
  
      return res.status(200)
    } catch (error) {
      console.log(error)
      res.status(500).json({message: error.message})
    }
  }

const getFlowMap = async (req, res) => {
    try {
        const { userToken, flowName } = req.body; 
        console.log(userToken)
        User.findOne({ userId: userToken }, (err, user) => {
            if (err) {
              console.error(err);
              return;
            }
          
            const flow = user.flowList.find((flow) => flow.name === flowName);
          
            if (flow) {
              const nodes = flow.flow[0].nodes;
              const edges = flow.flow[0].edges;
              const viewport = flow.flow[0].viewport;
          
              res.status(200).json({
                nodes,
                edges,
                viewport
              })
            }
          });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
  }

module.exports = {
    getFlowMap,
    createMapFlow
}