const mongoose = require('mongoose');
const mongooseIntl = require('mongoose-intl');

const cTypeSchema =  new mongoose.Schema({
    value: {
        type:     String,
        enum:     [  'wife', 'husband' ],
        required: true,
    },
    title: {
        type: String,
        intl: true,

    },
}, { toJSON: {
    virtuals: true,
}, id: false});
cTypeSchema.plugin(mongooseIntl, {languages: [ 'oz', 'uz', 'ru' ], defaultLanguage: 'oz' });
const cType = mongoose.model('CandidateTypes', cTypeSchema);


export {
    cType,
};
