export const getRedisConfig = () => {
    const REDIS_HOST = process.env.REDIS_HOST;
    const REDIS_PORT = process.env.REDIS_PORT;
    const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
    const REDIS_DB = process.env.REDIS_DB;

    return {
        REDIS_HOST,
        REDIS_PORT,
        REDIS_PASSWORD,
        REDIS_DB,
    };
};
