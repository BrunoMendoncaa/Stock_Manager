import ProductsRepositoryDatabase from "../Repositories/ProductsRepositoryDatabase.js"

class ProductsController{

    create(request, response){
        const result = ProductsRepositoryDatabase.create(request.body)
        response.status(201).json(result)
    }

    async index(request, response){
        const result =  await ProductsRepositoryDatabase.findAll()
        response.json(result)
    }

    async show(request, response){
        const id = request.params.id
        const result = await ProductsRepositoryDatabase.findById(id)
        response.json(result)
    }

    update(request, response){
        const result = ProductsRepositoryDatabase.update(request.params.id, request.body)
        response.json( result )
    }

    delete(request,response){
        const result = ProductsRepositoryDatabase.delete( request.params.id )
        response.status(200).send('OK')
    }
}

export default new ProductsController