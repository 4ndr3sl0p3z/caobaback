import * as sitioDal from '../dal/sitioDal';


export const getAllSites = async () => {
    const resultGetSites= await sitioDal.getAllSites();
    if(resultGetSites.success){
        return resultGetSites
    }
    else{
        if(resultGetSites.data){
            resultGetSites.statusCode = 204;
            return resultGetSites
        }
        else{
            resultGetSites.statusCode = 400;
            return resultGetSites
        }
    }
}

export const editSite = async ( req ) => {
    const resultEditSite = await sitioDal.editSite( req );
    if(resultEditSite.success){
        return resultEditSite
    }
    else{
        resultEditSite.statusCode = 400;
        return resultEditSite
    }
}

export const deleteSite = async (id) => {
    const resultDeleteSite = await sitioDal.deleteSite( id );
    if(resultDeleteSite.success){
        return resultDeleteSite
    }
    else{
        resultDeleteSite.statusCode = 400;
        return resultDeleteSite
    }
}

export const createSite = async ( body ) => {
    const resultCreateSite = await sitioDal.createSite( body );
    if(resultCreateSite.success){
        return resultCreateSite
    }
    else{
        resultCreateSite.statusCode = 400;
        return resultCreateSite
    }
}