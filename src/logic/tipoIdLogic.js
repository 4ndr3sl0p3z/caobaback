import * as tipoIdDal from '../dal/tipoIdDal';


export const getAllTypeId = async () => {
    const resultGetTypeID = await tipoIdDal.getAllTypeId();
    if(resultGetTypeID.success){
        return resultGetTypeID
    }
    else{
        if(resultGetTypeID.data){
            resultGetTypeID.statusCode = 204;
            return resultGetTypeID
        }
        else{
            resultGetTypeID.statusCode = 400;
            return resultGetTypeID
        }
    }
}