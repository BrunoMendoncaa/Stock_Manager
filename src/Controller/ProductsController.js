import ProductsRepository from "../Repositories/ProductsRepositoryLocal.js"

class ProductsController{

    create(request, response){
        const result = ProductsRepository.create(request.body)
        response.status(201).json(result)
    }

    async index(request, response){
        const result =  await ProductsRepository.findAll()
        response.json(result)
    }

    async show(request, response){
        const id = request.params.id
        const result = await ProductsRepository.findById(id)
        response.json(result)
    }

    update(request, response){
        const result = ProductsRepository.update(request.params.id, request.body)
        response.json( result )
    }

    delete(request,response){
        const result = ProductsRepository.delete( request.params.id )
        response.status(200).send('OK')
    }
}

export default new ProductsController