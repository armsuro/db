const DataTypes = require('sequelize');

const Schema = {
    'installation_id': {
        'type': DataTypes.STRING,
        'unique': true,
        'allowNull': false
    },
    'registered_date': {
        'type': DataTypes.DATE,
        'allowNull': true
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
        'allowNull': false
    },
    'pushToken': {
        'type': DataTypes.STRING,
        'allowNull': false
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
        'allowNull': false
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
    installations.Install.belongsTo(installations.Feature, {
        'foreignKey': 'installation_id',
        'as': 'Features'
    });
};

module.exports = seq => {
    const model = seq.define('Install', Schema, Options);
    model.associate = Association;

    return model;
}