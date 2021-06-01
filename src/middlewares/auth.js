import jwt from 'jsonwebtoken';
 
 
export const createToken = async ({
    id, nombreRol, userName
}) =>{

    try{
        const token = jwt.sign({
            id : id,
            nombreRol : nombreRol,
            userName : userName
        },
            process.env.SECRET_PASSWORD,
            {
                expiresIn : 3600
            }
        )
        return token;
    }
    catch(error){
        console.log(error);
        return null;
    }
}

export const verifyToken = async (req, res, next) =>{
    try {
        const token = req.headers["x-access-token"];
        
        if(token){
            const decoded = jwt.verify(token, "H3f3st0.2020*");
            
            if(decoded.id && decoded.nombreRol){
                req.body.nombreRol = decoded.nombreRol;
                req.body.userName = decoded.userName
                req.body.id = decoded.id;

                next();
            }
            else{
                res.status(401).json({message : "Expired token or invalid"})
            }
        }
        else{
            res.status(401).json({message : "No token provider"});
        }    
    } catch (error) {   
        res.status(401).json({message : "Expired token or invalid"});
    }
    
}

export const isAdmin = async (req, res, next) =>{
    if(req.body.nombreRol.toUpperCase() === "ADMINISTRADOR"){
        next();
    }
    else{
        res.status(400).json({message : "User admin is required"});
    }
}