import { CalculateValues } from "../Functions/Functions.js"

class ProductsRepository{
    constructor(){
        this.products = [
            {
                'id':1, 
                'name':'coca-cola lata 350ml', 
                'price': 3.50,
                'storage_count' : 100,
                'value_amount' : 350
            }]
    }
    create(values){
        const {name, price, storage_count} = values
        const id = this.products.length +1
        const value_amount = CalculateValues(price, storage_count)
        const result = {id,name, price, storage_count, value_amount}
        this.products.push(result)
        return result
    }
    
    findAll(){ 
        return this.products
    }
    
    findById(id){
        const result = this.products.filter(product => product.id == id)
        return result[0]
    }
    
    update(){}
    
    delete(id){
        const index = this.products.findIndex(product => product.id == id)
        this.products.splice(index,1)
        return index
    }
}

export default new ProductsRepository()
