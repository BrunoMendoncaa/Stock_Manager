import db from "../Database/Database.js"
import { v4 as uuidv4 } from 'uuid';
import { CalculateValues } from "../Functions/ProductsFunctions.js";

class ProductsRepositoryDatabase{
      create(values){
            const id = uuidv4()
            const {name, price, storage_count} = values
            const value_amount = CalculateValues(price, storage_count)
            const result = {id, name, price, storage_count, value_amount}
            const sql = `insert into storage (product_id, product_name, product_price, product_storage_count, storage_value_amount) values ('${id}','${name}',${price},${storage_count},${value_amount})`
            db.query(sql)
            return result
      }
      async findAll(){
            const sql = 'select * from storage'
            const [results] = await db.query(sql)
            return results
      }
      async findById(id){
            const sql = `select * from storage where product_id = '${id}'`
            const [results] = await db.query(sql)
            return results[0]
      }
      update(id, values){
            const {name, price, storage_count} = values
            const value_amount = CalculateValues(price, storage_count)
            const sql = `update storage set product_name = '${name}',product_price = ${price}, product_storage_count = ${storage_count}, storage_value_amount = ${value_amount} where product_id = '${id}'`
            db.query(sql)
            const result = {id, name, price, storage_count, value_amount}
            return result
      }
      delete(id){
            const sql = `delete from storage where product_id = '${id}'`
            db.query(sql)
      }
}

export default new ProductsRepositoryDatabase()
