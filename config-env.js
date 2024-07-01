
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID: 'PRABATH-MD~l6dFkRCZ#mWyqj_ZDJEgXLSby2ZTI_LqcmH8Cl8cMnIPVoij7D1k',    
    BOT_NUMBER:  '94743548986',
    GITHUB_USERNAME: username,
    GITHUB_AUTH_TOKEN: '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',
};
