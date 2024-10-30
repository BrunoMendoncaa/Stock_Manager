import db from "../Database/Database.js"
import { v4 as uuidv4 } from 'uuid';
import { CalculateValues } from "../Functions/ProductsFunctions.js";
import { create_sql, findAll_sql, findById_sql, update_sql, delete_sql } from "../Database/Querys.js";

class ProductsRepositoryDatabase{
      create(values){
            const id = uuidv4()
            const {name, price, storage_count} = values
            const value_amount = CalculateValues(price, storage_count)
            const createdAt = new Date().toLocaleDateString('pt-BR')
            
            const result = {id, name, price, storage_count, value_amount, createdAt}
            const sql = create_sql(id,name,price,storage_count,value_amount,createdAt)

            db.query(sql)
            return result
      }
      async findAll(){
            const sql = findAll_sql
            const [results] = await db.query(sql)
            return results
      }
      async findById(id){
            const sql = findById_sql(id)
            const [results] = await db.query(sql)
            return results[0]
      }
      update(id, values){
            const {name, price, storage_count} = values
            const value_amount = CalculateValues(price, storage_count)
            const changedAt = new Date().toLocaleDateString('pt-BR')
            const result = {id, name, price, storage_count, value_amount, changedAt}
            const sql = update_sql(name, id, price, storage_count, value_amount,changedAt)


            db.query(sql)
            return result
      }
      delete(id){
            const sql = delete_sql(id)
            db.query(sql)
      }
}

export default new ProductsRepositoryDatabase()
