'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('installations', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'installation_id': {
                'type': Sequelize.STRING,
                'unique': true,
                'allowNull': false
            },
            'registered_date': {
                'type': Sequelize.DATE,
                'allowNull': true
            },
            'app_version': {
                'type': Sequelize.STRING,
                'allowNull': true
            },
            'app_id': {
                'type': Sequelize.STRING,
                'allowNull': true
            },
            'timezone': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'locale': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'pushToken': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'os': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'os_version': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'type': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'cpu': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'gpu': {
                'type': Sequelize.STRING,
                'allowNull': false
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
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query("DROP TABLE installations cascade;");
    }
};