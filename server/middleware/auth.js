
// JWT is a secure token format used to verify the identity of a user after they log in — without needing to store session data on the server.
// When a user logs in successfully:
        //  1. The server creates a token (using jwt.sign) that contains some user info (like user ID, role, etc.)
        //  2.The token is sent back to the client (e.g., React app)
        //  3.On every future request, the client sends that token back in the Authorization header

import jwt from 'jsonwebtoken';

const auth=(req, res, next)=>{
    const token= req.headers.authorization;
    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        res.json({success: false, message: "invalid token"})
    }
}

export default auth;