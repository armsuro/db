'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('app_versions', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'os': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'version': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'package_86': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'package_64': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'release_notes': {
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
        }).then(() => {
            return queryInterface.addConstraint('app_versions', ['os', 'version'], {
                type: 'unique',
                name: 'unique_with_os_and_version'
            });
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query("DROP TABLE app_versions cascade;");
    }
};