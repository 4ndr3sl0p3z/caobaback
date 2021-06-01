import * as bloqueDal from '../dal/bloqueDal';


export const getAllBlocks = async () => {
    const resultGetBlock = await bloqueDal.getAllBlocks();
    if(resultGetBlock.success){
        return resultGetBlock
    }
    else{
        if(resultGetBlock.data){
            resultGetBlock.statusCode = 204;
            return resultGetBlock
        }
        else{
            resultGetBlock.statusCode = 400;
            return resultGetBlock
        }
    }
}

export const editBlock = async ( req ) => {
    const resultEditBlock = await bloqueDal.editBlock( req );
    if(resultEditBlock.success){
        return resultEditBlock
    }
    else{
        resultEditBlock.statusCode = 400;
        return resultEditBlock
    }
}

export const deleteBlock = async (id) => {
    const resultDeleteBlock = await bloqueDal.deleteBlock( id );
    if(resultDeleteBlock.success){
        return resultDeleteBlock
    }
    else{
        resultDeleteBlock.statusCode = 400;
        return resultDeleteBlock
    }
}

export const createBlock = async ( body ) => {
    const resultCreateBlock = await bloqueDal.createBlock( body );
    if(resultCreateBlock.success){
        return resultCreateBlock
    }
    else{
        resultCreateBlock.statusCode = 400;
        return resultCreateBlock
    }
}