////////////////////// 実装例 //////////////////////

const { mailToKindle } = require('../dest/mailToKindle');
const config = require('config');
const path = require('path');

// 設定ファイル
const sendTo = config.get('sendTo');
const smtp = config.get('smtp');

if(process.argv.length == 3){
    const fileName = process.argv[2].split(path.sep).pop();
    mailToKindle(fileName, process.argv[2], sendTo, false, smtp, function(e, i){});
}
