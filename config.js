/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                                                                                            // 
//          ██████╗ ██╗███████╗████████╗███████╗██████╗     ███╗   ███╗██████╗                // 
//         ██╔════╝ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ████╗ ████║██╔══██╗               // 
//         ██║  ███╗██║█████╗     ██║   █████╗  ██║  ██║    ██╔████╔██║██║  ██║               // 
//         ██║   ██║██║██╔══╝     ██║   ██╔══╝  ██║  ██║    ██║╚██╔╝██║██║  ██║               // 
//         ╚██████╔╝██║██║        ██║   ███████╗██████╔╝    ██║ ╚═╝ ██║██████╔╝               // 
//          ╚═════╝ ╚═╝╚═╝        ╚═╝   ╚══════╝╚═════╝     ╚═╝     ╚═╝╚═════╝                //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Gifted-Md
   * @author : Gifted Tech Info
   * @youtube : https://www.youtube.com/@giftedtechnexus
   * @description : Gifted-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Gifted Tech Info.
   * © 2024 Gifted-Md.


*/













const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/db3a5c86c0e3dd11e0071.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Bungoma,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || ""


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/ibrahimaitech/IBRAHIM-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/01bae0068863f48aff101.jpg"



global.devs = "2348141877822" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254710772666,254739937062";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348141877822";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/01bae0068863f48aff101.jpg,https://telegra.ph/file/db3a5c86c0e3dd11e0071.mp4,https://telegra.ph/file/af1705e9b4d6aa0bc0f96.jpg",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254710772666,254739937062";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254xxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254710772666,254739937062";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://black-panther-scanner-871df7205958.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "PANTHER;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNyNjVNcXdJczZtR29ERVN6VEFIdlo0bThNRVhaY2FyZTAycDBrcitsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHlpV0trMjFmb1VDdHpPT3VYT2xOMW9xUk1EQlAxYWc5TGVpdW5VVzRGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTGdWVDgrT3AxWms4dEJDK01IM2JCMnVsUDVuWDBKYUVNMWxDTmJxRmxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTktJdGxZOWtJSHJZRi8vQmZOeG44Sm5Xc1ZtY3JhdS8wK1VrRU1qOUNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCdjFSNjVpTG1ROEFOcXY1eXFjVUdJbWtyMEVtT0tTbTVDVGN1VCt1WDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkViNUxVS3F2REUzOVF4ZDJXZ2h2Z3o1V01TQkFkTEl0S0IySlNIMTk3UTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURiMTVvUmU3RWp2K25ienUvNElCTHN6Sm9oZmRxeFRTM2xLNWwyTERHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTRLdDJ6UWVpbUlwb1U2MGE2WkFVYkFzRTZlcDhld1kwSS9PeTdVUituVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVDMlBBam9IYmk1TFJNNEYrcVVsMVRkQyt1UE8xdXVtNEowS0xHaHJud2UzQVFmYUhKRnRkRzR4THYvU3dUMjZ1dFN3dlV5R3YvUldzV2QwbElXSGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJzMkZTRDRGMHRaUjVnYmkxTmdjb0x6NGJlT0RNN1RXK3ZGa1BuTFc3QS9nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5ZkpVaFQzS1M5Q1VoRlFBRmZGWFBRIiwicGhvbmVJZCI6IjNiMTRjOGFkLWVmZmItNGI1ZS1hNGE3LTUwOWJhOWE3NjU2NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTSs0TWNETyszazA0Y1pPdWVTOG45cnlxTFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0V3eEEvODFhWUdjZHY5VHpCNFk0aGs0d1Y4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkYyWk5NMkNRIiwibWUiOnsiaWQiOiIyMzQ4MTQxODc3ODIyOjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01pTTFLWUJFTDc2aHJNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNBUTdzYnNWZUlCaHIvWmdXcHZNOHJuN1EranhvTW1za3BnbDRSRXhWR2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkIxS2paM3lLRHUvS3BpUHk4OGZSTGJJOXpUKy9ubDhZRHh3cVFZUTcwd1hyME9xTmw4c2F1TkEvalRmUFgzN0V1d1ZGWll6aWk0ajZmakZ1VitKSkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlQW9raXpiV3liRVYvTi9CcGxVSUx5aG80Ty81QkRNT00xOVVrc1dTd2wrNnFwVjA1VFVaOHFFU0xYMW8wcTBoaVdPbmFndHBSaDRGMFlYS0ZKU25nUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDE4Nzc4MjI6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYQUVPN0c3RlhpQVlhLzJZRnFielBLNSswUG84YURKckpLWUplRVJNVlJvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3NjgxNDgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFQZyJ9" ; // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.5.0",
  caption : process.env.CAPTION || "*🐯𝘽𝙇𝘼𝘾𝙆 𝙋𝘼𝙉𝙏𝙃𝙀𝙍 𝙈𝘿 𝙑4 🐯*" , // ```『 ©²⁰²⁴ ɢɪғᴛᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛs 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ",
  packname: process.env.PACK_NAME || "Pᵒʷᵉʳᵉᵈ ᵇʸ Iᵇʳᵃʰⁱᵐ Aᵈᵃᵐˢ",
  botname : process.env.BOT_NAME  || "𝙋𝘼𝙉𝙏𝙃𝙀𝙍 𝙈𝘿",
  ownername:process.env.OWNER_NAME|| "Chukwujekwu Stephen ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};

























global.rank = "updated"
global.isMongodb = false ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
