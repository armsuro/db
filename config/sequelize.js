module.exports = {
    production: {
        "username": process.env.DB_USERNAME || "postgres",
        "password": process.env.DB_PASSWORD || "123456",
        "database": process.env.DB_DATABASE || "restoraner",
        "host": process.env.DB_HOST || "127.0.0.1",
        "port": process.env.DB_PORT || "5432",
        "dialect": process.env.DB_CONNECTION || "postgres"
    },
    development: {
        "username": process.env.DB_USERNAME || "postgres",
        "password": process.env.DB_PASSWORD || "123456",
        "database": process.env.DB_DATABASE || "restoraner",
        "host": process.env.DB_HOST || "127.0.0.1",
        "port": process.env.DB_PORT || "5432",
        "dialect": process.env.DB_CONNECTION || "postgres"
    },
    stage: {
        "username": process.env.DB_USERNAME || "postgres",
        "password": process.env.DB_PASSWORD || "123456",
        "database": process.env.DB_DATABASE || "restoraner",
        "host": process.env.DB_HOST || "127.0.0.1",
        "port": process.env.DB_PORT || "5432",
        "dialect": process.env.DB_CONNECTION || "postgres"
    }
}