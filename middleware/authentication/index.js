const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    let token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send({auth: false, message: 'No token provided.'});
    }
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
            return res.status(401).send({auth: false, message: 'Failed to authenticate token.'});
        }
        decoded.lineOffset
        req.customer_id = decoded.sub;
        req.token=token;
        next();
    });
}

module.exports = verifyToken;
