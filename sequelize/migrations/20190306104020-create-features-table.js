'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('features', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'installation_id': {
                'type': Sequelize.STRING,
                'allowNull': false,
                'references': {
                    'model': {
                        'tableName': 'installations'
                    },
                    'key': 'installation_id'
                },
                'onUpdate': 'cascade',
                'onDelete': 'cascade'
            },
            'feature': {
                'type': Sequelize.STRING,
                'allowNull': true
            },
            'state': {
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
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query("DROP TABLE features cascade;");
    }
};