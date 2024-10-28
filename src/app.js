import express from 'express'
import ProductsRouter from './Routers/ProductsRouters.js'

const app = express()

app.use(express.json())
app.use(ProductsRouter)


export default app
