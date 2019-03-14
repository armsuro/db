'use strict';
const md5 = require('md5');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('auth', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'username': {
                'type': Sequelize.STRING,
                'unique': true,
                'allowNull': false
            },
            'password': {
                'type': Sequelize.STRING,
                'allowNull': true
            },
            'created_at': {
                'allowNull': false,
                'type': Sequelize.DATE,
                'defaultValue': Sequelize.literal('CURRENT_TIMESTAMP')
            },
            'updated_at': {
                'allowNull': false,
                'type': Sequelize.DATE,
                'defaultValue': Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }).then(()=>{
        	return queryInterface.bulkInsert('auth', [{
                "username": "admin",
                "password": md5("password"),
            }, {
                "username": "test",
                "password": md5("test"),
            }]);
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query("DROP TABLE auth cascade;");
    }
};