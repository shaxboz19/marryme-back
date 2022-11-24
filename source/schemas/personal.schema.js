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
    isPublic: {
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

