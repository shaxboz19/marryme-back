export const userCreate = {
    type: 'object',

    properties: {
        name: {
            type:       'object',
            properties: {

                first: {
                    type:      'string',
                    pattern:   '^[a-z ,а-я,A-Z,А-Я]*$',
                    minLength: 3,
                },
                last: {
                    type:      'string',
                    pattern:   '^[a-z ,а-я,A-Z,А-Я]*$',
                    minLength: 3,
                },
            },
            required: [ 'first', 'last' ],
        },
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

        phone: {
            type:      'string',
            minLength: 12,
            // pattern:   '[+998][0-9]{12}',

        },

        password: {
            type:      'string',
            minLength: 8,
            // pattern:   '[a-z,0-9,A-Z]',
        },

        gender: {
            type: 'string',
            enum: [ 'M', 'F', 'm', 'f' ],
        },
        role: {
            type: 'string',
            enum: [ 'admin', 'user' ],
        },
        favorite: {
            type: 'array',
        },

        whiteList: {
            type: 'array',
        },
        blackList: {
            type: 'array',
        },
    },
    required: [ 'name', 'email', 'phone', 'password' ],


};
