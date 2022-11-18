export const getSecret = () => {
    const SECRET = process.env.JWT_SECRET;

    return {
        SECRET,
    };
};
