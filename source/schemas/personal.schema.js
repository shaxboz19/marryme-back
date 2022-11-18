export const personalData = {
    type: 'object',

    nickname: {
        type:      'string',
        minLength: 3,
        maxLength: 12,
    },

    aboutMe: {
        type: 'string',
    },
    inPublic: {
        type: 'boolean',
    },
    email: {
        type:   'string',
        format: 'email',

    },

    password: {
        type:      'string',
        minLength: 8,
    },

};

