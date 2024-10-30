export function create_sql(id, name, price, storage_count, value_amount){
      const sql = `insert into storage (product_id, product_name, product_price, product_storage_count, storage_value_amount) values ('${id}','${name}',${price},${storage_count},${value_amount})`
      return sql
}

export const findAll_sql = 'select * from storage'

export function findById_sql (id){
      const sql = `select * from storage where product_id = '${id}'`
      return sql
}

export function update_sql(name, id, price, storage_count, value_amount){
      const sql = `update storage set product_name = '${name}',product_price = ${price}, product_storage_count = ${storage_count}, storage_value_amount = ${value_amount} where product_id = '${id}'`
      return sql
}

export function delete_sql(id){
      const sql = `delete from storage where product_id = '${id}'`
      return sql
}