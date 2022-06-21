  const express = require('express')
  const router = express.Router()
  const {deleteItems,setItems,updateItems,getItems} = require('../controllers/itemController')

  router.get('/',getItems )

    router.post('/', setItems)

        
router.put('/:id',updateItems)
    
        
    router.delete('/:id',deleteItems)
        

  module.exports =router