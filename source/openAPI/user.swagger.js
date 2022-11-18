export const getUsers = {
    tags:        [ 'users' ],
    description: 'Get all users',
    operationId: 'getUsers',
    security:    [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        200: {
            description: 'A list of users',
            content:     {
                'application/json': {
                    schema: {
                        type:  'array',
                        items: {
                            type:       'object',
                            properties: {
                                name: {
                                    type:       'object',
                                    properties: {
                                        first: {
                                            type: 'string',
                                        },
                                        last: {
                                            type: 'string',
                                        },
                                    },
                                },
                                email: {
                                    type: 'string',

                                },
                                phone: {
                                    type:        'string',
                                    description: 'Pet Age',
                                },
                            },

                        },
                        example: [
                            {
                                name: {
                                    first: 'Shaxboz',
                                    last:  'Normatov',

                                },
                                email: 'shaxboz.nv@mail.ru',
                                phone: '+7(912)123-45-67',
                            },
                        ],
                    },
                },
            },
        },
    },
};
export const postLogin = {
    tags:        [ 'Login' ],
    description: 'Login',
    operationId: 'Login',
    security:    [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        200: {
            description: 'Login',
            content:     {
                'application/json': {
                    schema: {
                        type:  'array',
                        items: {
                            type:       'object',
                            properties: {
                                email: {
                                    type: 'string',

                                },
                                password: {
                                    type:      'string',
                                    minLength: 8,

                                },
                                required: [ 'email', 'password' ],
                            },

                        },
                        example: [
                            {
                                email:    'shaxboz.nv@mail.ru',
                                password: 'Qwerty123#@!',
                            },
                        ],
                    },
                },
            },
        },
    },
};
export const postFavarite = {
    tags:        [ 'favarite' ],
    description: 'favarite',
    operationId: 'favarite',
    security:    [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        200: {
            description: 'favarite',
            content:     {
                'application/json': {
                    schema: {
                        type:  'array',
                        items: {
                            type:       'object',
                            properties: {
                                uId: {
                                    type:  'string',
                                    value: 'uId === UserId',

                                },
                                id: {
                                    type:  'string',
                                    value: 'id === StatementId',

                                },
                                required: [ 'uId', 'id' ],
                            },

                        },
                        example: [
                            {
                                uId: '68958ss558658',
                                id:  '98s56685s5894',
                            },
                        ],
                    },
                },
            },
        },
    },
};
export const postRegistration = {
    tags:        [ 'Registration' ],
    description: 'Registration',
    operationId: 'Registration',
    security:    [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        200: {
            description: 'Registration',
            content:     {
                'application/json': {
                    schema: {
                        type:  'array',
                        items: {
                            type:       'object',
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
                                },

                                gender: {
                                    type: 'string',
                                    enum: [ 'M', 'F', 'm', 'f' ],
                                },

                            },
                            required: [ 'name', 'email', 'phone', 'password' ],

                        },
                        example: [
                            {
                                name: {
                                    first: 'John',
                                    last:  'Doe',
                                },
                                nickname: 'sem',
                                aboutMe:  'Hello',
                                email:    'sem@gmail.com',
                                phone:    '+998996899999',
                                password: 'Qwerty1234',
                                gender:   'M',

                            },
                        ],
                    },
                },
            },
        },
    },
};
export const updateUser = {
    tags:        [ 'updateUser' ],
    description: 'updateUser',
    operationId: 'updateUser',
    security:    [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        200: {
            description: 'updateUser',
            content:     {
                'application/json': {
                    schema: {
                        type:  'array',
                        items: {
                            type:       'object',
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

                                phone: {
                                    type:      'string',
                                    minLength: 12,
                                    required:  'true',

                                    // pattern:   '[+998][0-9]{12}',

                                },

                                password: {
                                    type:      'string',
                                    minLength: 8,
                                    required:  'true',
                                    // pattern:   '[a-z,0-9,A-Z]',
                                },

                                gender: {
                                    type: 'string',
                                    enum: [ 'M', 'F', 'm', 'f' ],
                                },

                            },

                        },
                        example: [
                            {
                                name: {
                                    first: 'John',
                                    last:  'Doe',
                                },
                                phone:    '+998996899999',
                                password: 'Qwerty1234',
                                gender:   'F',

                            },
                        ],
                    },
                },
            },
        },
    },
};
