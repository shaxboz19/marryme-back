export const loginSchema = {
    type: 'object',

    properties: {
        email: {
            type:   'string',
            format: 'email',

        },

        password: {
            type:      'string',
            minLength: 8,
            // pattern:   '[a-z,0-9,A-Z]',
        },
    },
    required: [ 'email', 'password' ],


};
