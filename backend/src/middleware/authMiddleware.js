const JWT = require("jsonwebtoken");

const middleware = async (req,res,next)=>{
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({message:"access denied"});
        }

        const token = authHeader.split(" ")[1];

    try {
        const decoded = JWT.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    } catch (error) {
         res.status(401).json({ message: "Invalid token" });
    }
};

module.exports=middleware;