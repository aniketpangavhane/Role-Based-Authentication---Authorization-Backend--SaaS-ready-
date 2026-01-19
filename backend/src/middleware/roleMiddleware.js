const roleMiddleware = (requiredRole) =>{
    return (req,res,next)=>{
        if(!req.user || req.user.role !== requiredRole){
            res.status(403).json({message:"Access forbiddenn"});
        }
        next();
    }
};

module.exports = roleMiddleware;