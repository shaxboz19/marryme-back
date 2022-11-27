export const mailOptions = (code) => ({
    from:    'merryme.uz@gmail.com',
    subject: 'Sending Email using Node.js',
    text:    `Ваш код сброса пароля: ${code}`,
});
