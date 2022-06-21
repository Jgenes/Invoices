//get invoice
//route GET /api/invoices
//access private
const  getInvoices = (req, res) => {
    res.status(200).json({message: 'Get Invoices'})
    }
    
//set client
//route POST /api/client
//access private
    const  setInvoices = (req, res) => {
        res.status(200).json({message: 'Set Invoices'})
        }
 //updte client
//route put /api/client/:id
//access private        
        const  updateInvoices = (req, res) => {
            
                res.status(200).json({message: `updatee Invoices ${req.params.id}`})
                }
            
        
        //delete client
   //route delete /api/client/:id
   //access private        
               const  deleteInvoices = (req, res) => {
            
                    res.status(200).json({message: `delete Invoices ${req.params.id}`})
                               }
   
module.exports = {
getInvoices,
setInvoices,
updateInvoices,
deleteInvoices
}