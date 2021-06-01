import * as pagoDal from '../dal/pagoDal';

export const getAllPendingForPayByUserId = async (body) => {
    const resultGetAll = await pagoDal.getAllPendingForPayByUserId(body)
    if(resultGetAll.success){
        return resultGetAll
    }
    else{
        if(resultGetAll.data){
            resultGetAll.statusCode = 204;
            return resultGetAll
        }
        else{
            resultGetAll.statusCode = 400;
            return resultGetAll
        }
    }
}

export const getAllPayedByUserId = async (body) => {
    const resultGetAll = await pagoDal.getAllPayedByUserId(body)
    if(resultGetAll.success){
        return resultGetAll
    }
    else{
        if(resultGetAll.data){
            resultGetAll.statusCode = 204;
            return resultGetAll
        }
        else{
            resultGetAll.statusCode = 400;
            return resultGetAll
        }
    }
}