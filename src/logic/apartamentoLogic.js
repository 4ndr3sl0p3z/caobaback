import * as apartamentoDal from '../dal/apartamentoDal'

export const generateAptos = async () => {
    const data = 
        {
            numeroBloque : 7,
            numeroPisos  : 7,
            numeroAptos  : 7
        }
    
    const resultGenerate = await apartamentoDal.generateAptos(data);
    return resultGenerate
}

export const getAll = async () => {
    const resultGetAll = await apartamentoDal.getAll();

    if(resultGetAll.success){
        return resultGetAll
    }
    else{
        if(resultGetAll.data)
            resultGetAll.statusCode = 204;
        else
            resultGetAll.statusCode = 400;
        return resultGetAll;
    }
}

export const changeStatus = async (body) => {
    const resultChangeStatus = await apartamentoDal.changeStatus(body);

    if(resultChangeStatus.success){
        return resultChangeStatus
    }
    else{
        resultChangeStatus.statusCode = 400;
        return resultChangeStatus;
    }
}