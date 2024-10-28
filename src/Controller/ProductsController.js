import ProductsRepository from "../Repositories/ProductsRepositoryLocal.js"

class ProductsController{

    create(request, response){
        const result = ProductsRepository.create(request.body)
        response.status(201).json(result)
    }

    index(request, response){
        const result = ProductsRepository.findAll()
        response.json(result)
    }

    show(request, response){
        const id = request.params.id
        const result = ProductsRepository.findById(id)
        response.json(result)
    }

    update(request, response){
        const result = ProductsRepository.update(request.params.id, request.body)
        response.json( result )
    }

    delete(request,response){
        const result = ProductsRepository.delete( request.params.id )
        if (result < 0) {
            response.status(404).json({"msg":"id não encontrado"})
        }else {
            response.status(200).json({"msg":"item deletado"})
        }
    }
}

export default new ProductsController