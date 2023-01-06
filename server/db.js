import promise from 'mysql2/promise';
/*const {createPool} = require("mysql2/promise");
export const pool = new createPool();*/
/*exports.pool = pool;*/

export const pool = promise.createPool({
     host: 'localhost',
     port: 3306,
     user:'root',
     password: 'root',
     database:'tasksdb'
})

 

