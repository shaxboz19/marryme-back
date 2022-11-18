export const statementCreate = {
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
            type: 'string',

        },
        age: {
            type:    'integer',
            minimum: 18,
        },
        height: {
            type: 'number',
        },
        weight: {
            type: 'number',
        },
        nationality: {
            type: 'string',
        },
        maritalStatus: {
            type: 'string',
        },
        education: {
            type: 'string',
        },
        workPlace: {
            type: 'string',
        },
        candidateAge: {
            type:    'integer',
            minimum: 18,
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
    // eslint-disable-next-line max-len
    required: [ 'candidateType', 'age', 'nationality', 'maritalStatus', 'region' ],

};
