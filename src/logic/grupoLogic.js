import * as grupoDal from '../dal/grupoDal';


export const getGroupByUser = async ( body ) => {
    const resultGetGroup = await grupoDal.getGroupByUser(body);
    if(resultGetGroup.success){
        return resultGetGroup
    }
    else{
        if(resultGetGroup.data.length <= 0){
            resultGetGroup.statusCode = 204;
            return resultGetGroup
        }
        else{
            resultGetGroup.statusCode = 400;
            return resultGetGroup
        }
    }
}