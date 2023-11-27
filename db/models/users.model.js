const { Model, DataTypes, Sequelize } = require('sequelize');

const USERS_TABLE = 'users';

const UsersSchema = {
    u_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    u_name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    u_email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    u_password:{
        allowNull: false,
        type: DataTypes.STRING
    },
    u_createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'u_create_at',
        defaultValue: Sequelize.fn("now")
    }
}

class Users extends Model {
    static associate() {
        // associate
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: USERS_TABLE,
            modelName: 'Users',
            timestamps: false
        }
    }
}


module.exports = { USERS_TABLE, UsersSchema, Users }