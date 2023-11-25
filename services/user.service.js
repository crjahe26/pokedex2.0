const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const { Users } = require('../db/models/users.model');



class UserService{
    constructor(){}
    
    async create(data){
        const newUser = await models.Users.create(data);
        return newUser;
    }


    
    async find(){
        const rta = await models.Users.findAll();
        return rta;
    }

    async findOne(id){
        const user = await models.Users.findByPk(id);
        if (!user) {
            throw boom.notFound('user not found');
        }
        return { user };
    }

    async findByEmailAndPassword(email, password){
        const user = await models.Users.findOne({where: { u_email: email, u_password: password }});
        if (!user) {
            throw boom.notFound('user not found');
        }
        return { user };
    }

    async update(u_id, changes){
        const user = await this.findOne(u_id);
        const [idUpdated, updatedUser] = await Users.update(changes,  {where: { u_id: u_id }, returning:true});
        return {idUpdated, updatedUser};
    }

    async delete(u_id){
        const user = await this.findOne(u_id);
        await Users.destroy({where: { u_id: u_id }});
        return { u_id, user };
    }
}


module.exports=UserService;