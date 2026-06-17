const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

module.exports = async function handler(req, res) {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);
  res.send(`
    <h1>REFRESH TOKEN:</h1>
    <p style="word-break:break-all;font-size:18px">${tokens.refresh_token}</p>
  `);
};
