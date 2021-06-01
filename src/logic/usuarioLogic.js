import * as usuarioDal from '../dal/usuarioDal';
import { comparePassword, encryptPassword } from '../middlewares/processPassword';
import { createToken } from '../middlewares/auth';
import langES     from '../resources/languages/es.json';


export const Login = async (req, res) => {

    const { lang, password } = req.body
    const resultGetUser = await usuarioDal.login(req.body);
    if( resultGetUser.success ){
        const { data } = resultGetUser;
        const resultComparePassword = await comparePassword(data.password, password);
        if(resultComparePassword){

            try{
                const token = await createToken({id : data.id, nombreRol : data.rol[0].nombreRol, userName : data.persona[0].email})
                data.token = token;
                data.password = "";
                return {
                    success : true,
                    data : data
                }
            }
            catch{
                return {
                    success : false,
                    message  : lang === "ES" ? langES.token.errorCrear : langES.token.errorCrear,
                    statusCode : 400
                }
            }
            
        }
        else{
            return {
                success : false,
                message  : lang === "ES" ? langES.usuarios.errorContrasena : langES.usuarios.errorContrasena,
                statusCode : 401
            }
        }
    }
    else{
        if(resultGetUser.data){
            return {
                success : false,
                message : lang === "ES" ? langES.usuarios.noExiste : langES.usuarios.noExiste,
                statusCode : 204
            }
        }
        else{
            return {
                success : false,
                message : resultGetUser.message,
                statusCode : 400
            }
        }
    }

}

export const createUser = async ( req ) => {
    const { password, personaId } = req.body;
    const _password = await encryptPassword(password);
    
    const resultCreateUser = await usuarioDal.createUser({personaId : personaId, password : _password});
    if(resultCreateUser.success){
        return resultCreateUser
    }
    else{
        resultCreateUser.statusCode = 400;
        return resultCreateUser
    }
}

export const getUserByNumeroApto = async (body) => {
    const resultGetUserByNumeroApto= await usuarioDal.getUserByNumeroApto(body)
    if(resultGetUserByNumeroApto.success){
        return resultGetUserByNumeroApto
    }
    else{
        resultGetUserByNumeroApto.statusCode = 400;
        return resultGetUserByNumeroApto
    } 
}

export const deleteUser = async (id) => {
    const resultDeleteUser = await usuarioDal.deleteUser( id );
    if(resultDeleteUser.success){
        return resultDeleteUser
    }
    else{
        resultDeleteUser.statusCode = 400;
        return resultDeleteUser
    }
}