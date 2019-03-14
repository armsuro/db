const DataTypes = require('sequelize');

const Schema = {
    'username': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'password': {
        'type': DataTypes.STRING,
        'allowNull': true
    }
};

const Options = {
    'tableName': 'auth',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

module.exports = seq => {
    const model = seq.define('Auth', Schema, Options);
    return model;
}
