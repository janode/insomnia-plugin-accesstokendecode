const base64 = require('base-64')

const bufferToJsonObj = buf => JSON.parse(buf.toString('utf-8'));
const jsonObjToBuffer = obj => Buffer.from(JSON.stringify(obj), 'utf-8');

module.exports.responseHooks = [
  async ctx => {
    try{
      const responseBody = bufferToJsonObj(ctx.response.getBody());
      
      var jwt = responseBody.access_token;
      
      if (jwt) {
        var jwtParts = jwt.split('.');
        responseBody.__access_token_header = JSON.parse(base64.decode(jwtParts[0]));
        responseBody.__access_token_payload = JSON.parse(base64.decode(jwtParts[1]));
      }

      ctx.response.setBody(jsonObjToBuffer(responseBody));
    } catch {
      // no-op
    }
  }
]