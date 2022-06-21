//get item
//route GET /api/item/:id
//access private
const  getItems = (req, res) => {
    res.status(200).json({message: 'Get Items'})
    }
    
//set item
//route POST /api/item
//access private
    const  setItems = (req, res) => {
        res.status(200).json({message: 'Set Items'})
        }
 //updte Items
//route put /api/item/:id
//access private        
        const  updateItems = (req, res) => {
            
                res.status(200).json({message: `updatee items ${req.params.id}`})
                }
            
        
        //delete items
   //route delete /api/items/:id
   //access private        
               const  deleteItems = (req, res) => {
            
                    res.status(200).json({message: `delete Items ${req.params.id}`})
                               }
   
module.exports = {
getItems,
setItems,
updateItems,
deleteItems
}