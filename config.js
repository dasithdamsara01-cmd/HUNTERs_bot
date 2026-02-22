const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/dasithdamsara01-cmd/HUNTERs_bot/blob/main/images/ChatGPT%20Image%20Feb%2022%2C%202026%2C%2004_30_33%20PM.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 I'm HUNTER BOT.I'm Alive Now😍*",
BOT_OWNER: '94764059948',  // Replace with the owner's phone number



};
