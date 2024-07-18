const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084101782";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_46_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEyLFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5LFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICA3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZnUXlabUhSNVlqakFtdXhQT2d0ZXgrOFI3OFBUZ29LckhIMlFyQVdUQ009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFEbHdpYnVyUUU2cVAxU0ZSMG5rTkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTA0MTk1YWMtYTc5My00OTkwLWJhOGEtZjM4OTlmNjcwZTVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMTExLFxuICAgICAgMjUxLFxuICAgICAgMTg2LFxuICAgICAgOTIsXG4gICAgICA4OCxcbiAgICAgIDE3MyxcbiAgICAgIDEyOSxcbiAgICAgIDE5NixcbiAgICAgIDEzNCxcbiAgICAgIDI1MSxcbiAgICAgIDM0LFxuICAgICAgMTk5LFxuICAgICAgMTgzLFxuICAgICAgMTkwLFxuICAgICAgMTM3LFxuICAgICAgMTE1LFxuICAgICAgMTMxLFxuICAgICAgMjAsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ3LFxuICAgICAgMjAwLFxuICAgICAgNjAsXG4gICAgICA4OSxcbiAgICAgIDEzOCxcbiAgICAgIDI1LFxuICAgICAgNTYsXG4gICAgICA1LFxuICAgICAgNDQsXG4gICAgICAxMzQsXG4gICAgICAzNSxcbiAgICAgIDE5LFxuICAgICAgMjA2LFxuICAgICAgMTIwLFxuICAgICAgMjMyLFxuICAgICAgMTE5LFxuICAgICAgNixcbiAgICAgIDE1OCxcbiAgICAgIDEzMixcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldTOVEzUjRIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg0MTAxNzgyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NjY4MTc4MjIzNTIzMjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tYeTlQMEJFTVBVMjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiemNtQlFHYUhPSmpSWmpZSnBTUzVEakxDYXlETkF6MjUxMGdlWk5HeHJGWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0RUJJSDFjTmU4UzhVZzE1d0IvNHlrQ1kyb2NyQ29BQ2hTcmdGdzJwSzdMNEtJZzJQeVI1T2ZHd2VtQXJ1NW9YU1hxYjE1aTIvbk83cVNxbVRoZFlCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkYktaTUxndFM0WnQvcnpmUFoxUzdEUEdZZDhBaVJNSmVYbUpiYVAydkErQW14ZFp0NHdCWjVRUzB1N3lBZHBTV1U3WmxlSXc1eS8yOXlpc3h3L2lBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg0MTAxNzgyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExNjY0MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGOUlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUY5SS5qc29uIjogIntcImtleURhdGFcIjpcImZzejlxUDNOMFZOYlhEajNZREdCR3ZRNTFMbVMzckxTdWNubWxnZXlsTmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTMyNDk0NjI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMTY2MTMwNDUwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
