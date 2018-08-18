"use strict";
exports.__esModule = true;
var nodemailer = require("nodemailer");
function mailToKindle(fileName, attachData, mailTo, convert, mailerConfig, callback) {
    if (convert === void 0) { convert = false; }
    var transporter = nodemailer.createTransport(mailerConfig);
    var attachOption = {
        filename: fileName,
        headers: {
            'X-Attachment-Id': 'foobarbuz'
        }
    };
    if (typeof (attachData) == 'string') {
        attachOption['path'] = attachData;
    }
    else {
        attachOption['content'] = attachData;
    }
    var mailOptions = {
        to: mailTo,
        subject: convert ? 'convert' : '\0',
        text: '\0',
        attachments: [attachOption]
    };
    transporter.sendMail(mailOptions, callback);
}
exports.mailToKindle = mailToKindle;
