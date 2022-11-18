const mongoose = require('mongoose');
const mongooseIntl = require('mongoose-intl');

const educationSchema =  new mongoose.Schema({
    value: {
        type:     String,
        enum:     [ 'higher', 'secondary', 'masters', 'phd'  ],
        required: true,
    },
    title: {
        type: String,
        intl: true,

    },
}, { toJSON: {
    virtuals: true,
}, id: false});

educationSchema.plugin(mongooseIntl, {languages: [ 'oz', 'uz', 'ru' ], defaultLanguage: 'oz' });

const education = mongoose.model('educations', educationSchema);

export {
    education,
};
