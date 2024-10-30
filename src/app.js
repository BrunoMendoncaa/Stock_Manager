import express from 'express'
import ProductsRouter from './Routers/ProductsRouters.js'
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(ProductsRouter)
app.use(cors({ origin: '*' }))

export default app
