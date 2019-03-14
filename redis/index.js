const redis = require("redis");
const bluebird = require("bluebird");
const config = require('../config/redis');


bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(config[process.env.NODE_ENV]);

module.exports = client;

