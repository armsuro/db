const DataTypes = require('sequelize');

const Schema = {
    'os': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'version': {
        'type': DataTypes.STRING,
        'allowNull': false,
    },
    'package_86': {
        'type': DataTypes.STRING,
        'allowNull': false,
        'validate': {
            'isUrl': true,
        },
    },
    'package_64': {
        'type': DataTypes.STRING,
        'allowNull': false,
        'validate': {
            'isUrl': true,
        },
    },
    'release_notes': {
        'type': DataTypes.STRING,
        'allowNull': true,
        'validate': {
            'isUrl': true,
        },
    },
};

const Options = {
    'tableName': 'app_versions',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = () => {
    
};

module.exports = seq => {
    const model = seq.define('Version', Schema, Options);
    model.associate = Association;

    return model;
}
