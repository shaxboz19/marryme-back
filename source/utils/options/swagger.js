// eslint-disable-next-line no-unused-vars
import {postLogin, getUsers, getStatement, postStatement, postRegistration, updateUser, postFavarite} from '../../openAPI';
export const swaggerDocument = {
    openapi:    '3.0.1',
    components: {
        schemas: {
            User: {
                type:       'object',
                properties: {
                    _id: {
                        type: 'string',

                    },
                    email: {
                        type: 'string',
                    },
                },
            },
        },
        securitySchemes: {
            bearerAuth: {
                type:         'http',
                scheme:       'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    info: {
        version:        '1.0.0',
        title:          'APIs Document',
        description:    'your description here',
        termsOfService: '',
        contact:        {
            name:  'Shaxboz Normatov',
            email: 'shaxboz.nv@mail.ru',
            url:   'https://hoangtran.co',
        },
        license: {
            name: 'Apache 2.0',
            url:  'https://www.apache.org/licenses/LICENSE-2.0.html',
        },


    },
    tags: [
        {
            name: 'users',
        },
    ],
    paths: {
        '/users': {
            get: getUsers,
        },
        '/login': {
            post: postLogin,
        },
        'users/registration': {
            post: postRegistration,
        },
        '/users/update': {
            post: updateUser,
        },
        '/users/addFavorite': {
            put: postFavarite,
        },
        '/users/removeFavorite': {
            delete: postFavarite,
        },
        '/statement': {
            get:  getStatement,
            post: postStatement,
        },
    },
};
