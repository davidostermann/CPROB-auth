const jwt = require('jsonwebtoken')
const user = 

const extractBearerToken = headerValue => {
  if (typeof headerValue !== "string") {
    return false;
  }
  const matches = headerValue.match(/(bearer)\s+(\S+)/i);
  return matches && matches[2];
};

exports.checkTokenMiddleware = (req, res, next) => {
  // 1. extraction
  const token = req.headers.authorization && extractBearerToken(req.headers.authorization);

  // 2. verifier que l'extraction a bien generé un token //if(!token) 
  if(!token) {
    return res.status(403).json({error:'Bad token'})
  }

  // 3.verifier la qualité du token via jwt.verify
  jwt.verify(token, "coucou", (err, token) => {
    if(err) {
      return res.status(403).json({ error: "2. Bad token" });
    }

    // 4. get id from token payload

    // 5. get user from id
    // 6. enrichit le req ave le user recupéré
    // 7. call next()


    next()
  });

}