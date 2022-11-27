import { createTransport } from 'nodemailer';
import { mailOptions } from '../options/mail';

export const sendMailWrapper = (data, code) => {
    return new Promise((resolve, reject) => {
        const transporter = createTransport({
            service: 'gmail',
            auth:    {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        transporter.sendMail({...data, ...mailOptions(code)}, function(error, info) {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
};
