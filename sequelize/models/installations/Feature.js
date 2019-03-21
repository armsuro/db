const DataTypes = require('sequelize');

const Schema = {
    'installation_id': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'feature': {
        'type': DataTypes.STRING,
        'allowNull': true
    },
    'options': {
        'type': DataTypes.JSON,
        'allowNull': false
    }
};

const Options = {
    'tableName': 'features',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    installations
}) => {
    installations.Feature.belongsTo(installations.Install, {
        'foreignKey': 'installation_id',
        'as': 'Installations'
    });
};

module.exports = seq => {
    const model = seq.define('Feature', Schema, Options);
    model.associate = Association;

    return model;
}
