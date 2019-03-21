const DataTypes = require('sequelize');

const Schema = {
    'installation_id': {
        'type': DataTypes.STRING,
        'unique': true,
        'primaryKey': true,
        'allowNull': false
    },
    'app_version': {
        'type': DataTypes.STRING,
        'allowNull': true
    },
    'app_id': {
        'type': DataTypes.STRING,
        'allowNull': true
    },
    'timezone': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'locale': {
        'type': DataTypes.STRING,
        'allowNull': true
    },
    'push_token': {
        'type': DataTypes.STRING,
        'allowNull': true
    },
    'os': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'os_version': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'type': {
        'type': DataTypes.STRING,
        'allowNull': true
    },
    'cpu': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'gpu': {
        'type': DataTypes.STRING,
        'allowNull': false
    }
};

const Options = {
    'tableName': 'installations',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    installations
}) => {
    installations.Install.hasMany(installations.Feature, {
        'foreignKey': 'installation_id',
        'as': 'Features'
    });
};

module.exports = seq => {
    const model = seq.define('Install', Schema, Options);
    model.associate = Association;

    return model;
}