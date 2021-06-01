import * as maestroDal from '../dal/maestroPagosDal';

export const create = async ( body ) => {
    const resultCreate = await maestroDal.create( body );
    if(resultCreate.success){
        return resultCreate
    }
    else{
        resultCreate.statusCode = 400;
        return resultCreate
    }
}

export const editMs = async( body ) => {
    const resultEdit = await maestroDal.editMs( body );
    if(resultEdit.success){
        return resultEdit
    }
    else{
        resultEdit.statusCode = 400;
        return resultEdit
    }
}

export const deleteMs = async ( id ) => {
    const resultDelete = await maestroDal.deleteMs( id );
    if(resultDelete.success){
        return resultDelete
    }
    else{
        resultDelete.statusCode = 400;
        return resultDelete
    }
}

export const getMs = async () => {
    const resultGet = await maestroDal.getMs();
    if(resultGet.success){
        return resultGet
    }
    else{
        if(resultGet.data){
            resultGet.statusCode = 204;
            return resultGet
        }
        else{
            resultGet.statusCode = 400;
            return resultGet
        }
    }
}