import express from 'express'
import ProductsController from './Controller/ProductsController.js'
const app = express()
app.use(express.json())

app.post('/products', ProductsController.create)
app.get('/products', ProductsController.index)
app.get('/products/:id', ProductsController.show)
app.delete('/products/:id', ProductsController.delete)

export default app
