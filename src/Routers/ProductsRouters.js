import { Router } from "express"
import ProductsController from "../Controller/ProductsController.js"

const ProductsRouter = Router()

ProductsRouter.post('/products', ProductsController.create)
ProductsRouter.get('/products', ProductsController.index)
ProductsRouter.get('/products/:id', ProductsController.show)
ProductsRouter.delete('/products/:id', ProductsController.delete)
ProductsRouter.put('/products/:id', ProductsController.update)

export default ProductsRouter