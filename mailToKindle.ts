import * as nodemailer from 'nodemailer';
import { Stream } from 'stream';

export function mailToKindle(fileName: string, attachData: Buffer | Stream | string, mailTo: string, convert: boolean = false, mailerConfig: object, callback : (err: any, info: any) => void)
{
    const transporter = nodemailer.createTransport(mailerConfig);

    let attachOption = {
        filename: fileName,
        headers: {
            'X-Attachment-Id': 'foobarbuz'
        }
    };

    if(typeof(attachData) == 'string'){
        attachOption['path'] = attachData;
    }
    else{
        attachOption['content'] = attachData;
    }

    const mailOptions = {
        to: mailTo,
        subject: convert? 'convert': '\0',
        text: '\0',
        attachments: [attachOption]
    };

    transporter.sendMail( mailOptions, callback);

}