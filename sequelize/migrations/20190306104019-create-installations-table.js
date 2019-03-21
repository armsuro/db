'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('installations', {
            'installation_id': {
                'type': Sequelize.STRING,
                'unique': true,
                'primaryKey': true,
                'allowNull': false
            },
            'app_version': {
                'type': Sequelize.STRING,
                'allowNull': false
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
                'allowNull': true
            },
            'push_token': {
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
                'allowNull': true
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