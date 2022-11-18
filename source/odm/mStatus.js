const mongoose = require('mongoose');
const mongooseIntl = require('mongoose-intl');

const mStatusSchema =  new mongoose.Schema({
    value: {
        type:     String,
        enum:     [ 'married', 'single', 'divorced' ],
        required: true,
    },
    title: {
        type: String,
        intl: true,

    },
}, { toJSON: {
    virtuals: true,
}, id: false});

mStatusSchema.plugin(mongooseIntl, {languages: [ 'oz', 'uz', 'ru' ], defaultLanguage: 'oz' });

const mStatus = mongoose.model('MaritalStatuses', mStatusSchema);

export {
    mStatus,
};
