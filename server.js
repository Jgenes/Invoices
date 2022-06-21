
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()
//Route for client
app.use('/api/clients', require('./routes/clientRoutes'))
//route for items
app.use('/api/items', require('./routes/itemRoutes'))

//route for invoice
app.use('/api/invoices', require('./routes/invoiceRoutes'))

app.listen(port, ()=> console.log(`Server starting on port ${port}`))
