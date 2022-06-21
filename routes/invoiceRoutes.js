const express = require('express')
const router = express.Router()
const {setInvoices,deleteInvoices,updateInvoices,getInvoices  } = require('../controllers/invoiceController')

router.get('/', getInvoices)    

router.post('/', setInvoices)

    
router.put('/:id', updateInvoices)

    
router.delete('/:id', deleteInvoices)
    

module.exports = router