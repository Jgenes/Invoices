//get client
//route GET /api/client
//access private
const  getClients = (req, res) => {
        res.status(200).json({message: 'Get clients'})
        }
        
//set client
//route POST /api/client
//access private
        const  setClients = (req, res) => {
            res.status(200).json({message: 'Set clients'})
            }
     //updte client
//route put /api/client/:id
//access private        
            const  updateClients = (req, res) => {
                
                    res.status(200).json({message: `updatee client ${req.params.id}`})
                    }
                
            
            //delete client
       //route delete /api/client/:id
       //access private        
                   const  deleteClients = (req, res) => {
                
                        res.status(200).json({message: `delete client ${req.params.id}`})
                                   }
       
module.exports = {
    getClients,
    setClients,
    updateClients,
    deleteClients
}