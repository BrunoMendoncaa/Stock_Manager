export function create_sql(id, name, price, storage_count, value_amount, createdAt){
      const sql = `insert into storage (product_id, product_name, product_price, product_storage_count, storage_value_amount, created_at) values ('${id}','${name}',${price},${storage_count},${value_amount},'${createdAt}')`
      return sql
}

export const findAll_sql = 'select * from storage'

export function findById_sql (id){
      const sql = `select * from storage where product_id = '${id}'`
      return sql
}

export function update_sql(name, id, price, storage_count, value_amount, changedAt){
      const sql = `update storage set product_name = '${name}',product_price = ${price}, product_storage_count = ${storage_count}, storage_value_amount = ${value_amount}, changed_at = '${changedAt}' where product_id = '${id}'`
      return sql
}

export function delete_sql(id){
      const sql = `delete from storage where product_id = '${id}'`
      return sql
}

export const create_storage_sql = `
CREATE TABLE IF NOT EXISTS STORAGE (
      product_id varchar(55) not null,
      product_name varchar(25) not null,
      product_price decimal(5,2) not null,
      product_storage_count int not null,
      storage_value_amount decimal(9,2) not null,
      created_at varchar(25) not null,
      changed_ate varchar(25),
      PRIMARY KEY(product_id)
)
`