const express = require('express')
const router = express.Router()
const { getClients,deleteClients,updateClients,setClients } = require('../controllers/clientController')


router.get('/', getClients)

    router.post('/', setClients)

        
router.put('/:id', updateClients)
    
        
    router.delete('/:id', deleteClients)
        


    


    
module.exports = router