export const getStatement = {
    tags:        [ 'statement' ],
    description: 'Get all statement',
    operationId: 'getStatement',
    security:    [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        200: {
            description: 'A list of statement',
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
                                candidateType: {
                                    type:  'string',
                                    value: [ 'wife', 'husband' ],

                                },
                                age: {
                                    type: 'number',


                                },
                                height: {
                                    type: 'number',
                                },
                                weight: {
                                    type: 'number',
                                },
                                maritalStatus: {
                                    type:  'string',
                                    value: [ 'married', 'single', 'divorced' ],
                                },
                                children: {
                                    type: 'number',
                                },
                                education: {
                                    type:  'string',
                                    value: [ 'higher', 'secondary', 'masters', 'phd' ],
                                },
                                nationality: {
                                    type:   'string',
                                    valuer: [ 'uzb', 'rus' ],
                                },
                                workPlace: {
                                    type: 'string',
                                },
                                candidateAge: {
                                    type: 'number',
                                },
                                description: {
                                    type: 'string',
                                },
                                region: {
                                    type: 'string',
                                },
                                address: {
                                    type: 'string',
                                },
                            },

                        },
                        example: [
                            {
                                name: {
                                    first: 'Jhon',
                                    last:  'Doe',
                                },
                                candidateType: 'wife',

                                age:           22,
                                height:        178,
                                weight:        160,
                                maritalStatus: 'married',
                                children:      0,
                                education:     'masters',
                                nationality:   'uzb',
                                workPlace:     'hello',
                                candidateAge:  19,
                                description:   'ok',
                                region:        'Tashkent',
                                address:       'Yashnabod 12/1',
                            },
                        ],
                    },
                },
            },
        },
    },
};
export const postStatement = {
    tags:        [ 'statement' ],
    description: 'Post statement',
    operationId: 'postStatement',
    security:    [
        {
            bearerAuth: [],
        },
    ],
    responses: {
        200: {
            description: 'Post',
            content:     {
                'application/json': {
                    schema: {
                        type:  'array',
                        items: {
                            type:       'object',
                            properties: {
                                candidateType: {
                                    type:  'string',
                                    value: [ 'wife', 'husband' ],


                                },
                                age: {
                                    type: 'number',
                                    min:  18,


                                },
                                height: {
                                    type: 'number',
                                },
                                weight: {
                                    type: 'number',
                                },
                                maritalStatus: {
                                    type:  'string',
                                    value: [ 'married', 'single', 'divorced' ],

                                },
                                children: {
                                    type: 'number',
                                },
                                education: {
                                    type:  'string',
                                    value: [ 'higher', 'secondary', 'masters', 'phd' ],
                                },
                                nationality: {
                                    type:   'string',
                                    valuer: [ 'uzb', 'rus' ],

                                },
                                workPlace: {
                                    type: 'string',
                                },
                                candidateAge: {
                                    type: 'number',
                                    min:  18,

                                },
                                description: {
                                    type: 'string',
                                },
                                region: {
                                    type: 'string',

                                },
                                address: {
                                    type: 'string',
                                },
                            },
                            required: [ 'candidateType', 'age', 'nationality', 'maritalStatus', 'region' ],

                        },
                        example: [
                            {
                                name: {
                                    first: 'Jhon',
                                    last:  'Doe',
                                },
                                candidateType: 'wife',

                                age:           22,
                                height:        178,
                                weight:        160,
                                maritalStatus: 'married',
                                children:      0,
                                education:     'masters',
                                nationality:   'uzb',
                                workPlace:     'hello',
                                candidateAge:  19,
                                description:   'ok',
                                region:        'Tashkent',
                                address:       'Yashnabod 12/1',

                            },
                        ],
                    },
                },
            },
        },
    },
};
