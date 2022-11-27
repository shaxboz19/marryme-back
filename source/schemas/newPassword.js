export const newPassword = {
    type: 'object',

    password: {
        type: 'string',

        minLength: 3,
        maxLength: 12,
    },
    email: {
        type:   'string',
        format: 'email',
    },
    required: [ 'email', 'password' ],

};

