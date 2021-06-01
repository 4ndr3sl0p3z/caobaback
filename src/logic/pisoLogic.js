import * as pisoDal from '../dal/pisoDal';


export const getAllFloors = async () => {
    const resultGetFloor = await pisoDal.getAllFloors();
    if(resultGetFloor.success){
        return resultGetFloor
    }
    else{
        if(resultGetFloor.data){
            resultGetFloor.statusCode = 204;
            return resultGetFloor
        }
        else{
            resultGetFloor.statusCode = 400;
            return resultGetFloor
        }
    }
}

export const editFloor = async ( req ) => {
    const resultEditFloor = await pisoDal.editFloor( req );
    if(resultEditFloor.success){
        return resultEditFloor
    }
    else{
        resultEditFloor.statusCode = 400;
        return resultEditFloor
    }
}

export const deleteFloor = async (id) => {
    const resultDeleteFloor = await pisoDal.deleteFloor( id );
    if(resultDeleteFloor.success){
        return resultDeleteFloor
    }
    else{
        resultDeleteFloor.statusCode = 400;
        return resultDeleteFloor
    }
}

export const createFloor = async ( body ) => {
    const resultCreateFloor = await pisoDal.createFloor( body );
    if(resultCreateFloor.success){
        return resultCreateFloor
    }
    else{
        resultCreateFloor.statusCode = 400;
        return resultCreateFloor
    }
}