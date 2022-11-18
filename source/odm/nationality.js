const mongoose = require('mongoose');
const mongooseIntl = require('mongoose-intl');

const nationalitySchema =  new mongoose.Schema({
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

nationalitySchema.plugin(mongooseIntl, {languages: [ 'oz', 'uz', 'ru' ], defaultLanguage: 'oz' });

const nationality = mongoose.model('Nationalities', nationalitySchema);

export {
    nationality,
};
