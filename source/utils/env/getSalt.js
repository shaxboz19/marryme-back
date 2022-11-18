export const getSalt = () => {
    const SALT = Number(process.env.SALT_WORK_FACTOR);

    return {
        SALT,
    };
};
