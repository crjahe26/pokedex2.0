const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool')

const getConnection = require('../libs/postgres');

class UserService{
    constructor(){
        this.pool = pool;
        this.pool.on('error', (err) => console.error(err))
      }
    
    async create(data){
        return data;
    }


    
    async find(){
        const client = 'SELECT * FROM users';
        const rta = await this.pool.query(client);
        return rta.rows;
    }

    async findOne(id){
        return{id};
    }

    async update(id,changes){
        return{id,changes,};
    }

    async delete(id){
        return{id};
    }
}


module.exports=UserService;