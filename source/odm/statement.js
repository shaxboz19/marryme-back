const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const statementSchema = new mongoose.Schema({
    candidateType: {
        type:     mongoose.Schema.Types.ObjectId,
        ref:      'CandidateTypes',
        required: true,
    },
    userId: {
        type:     mongoose.Schema.Types.ObjectId,
        required: true,
    },
    age: {
        type:     Number,
        required: true,
        min:      18,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    maritalStatus: {
        type:     mongoose.Schema.Types.ObjectId,
        ref:      'MaritalStatuses',
        required: true,
    },
    children: {
        type: Number,
    },
    education: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  'educations',
    },
    nationality: {
        type:     mongoose.Schema.Types.ObjectId,
        ref:      'Nationalities',
        required: true,
    },
    workPlace: {
        type: String,
    },
    candidateAge: {
        type: Number,
        min:  18,
    },
    description: {
        type: String,
    },
    region: {
        type:     String,
        required: true,
    },
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
    address: {
        type: 'string',
    },
}, { toJSON: {
    virtuals: true,
}, id: false});
statementSchema.plugin(mongoosePaginate);

const statement = mongoose.model('Statement', statementSchema);

export {
    statement,
};
