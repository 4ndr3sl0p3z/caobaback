import * as personaDal from '../dal/personaDal'


export const createPerson = async ( body ) => {
    const resultCreatePerson = await personaDal.createPerson(body);
    return resultCreatePerson;
}

export const getPersonsByBlockAndFloor = async ( body ) => {
    const resultGetPersons = await personaDal.getPersonsByBlockAndFloor(body)
    if(resultGetPersons.success){
        return resultGetPersons
    }
    else{
        if(resultGetPersons.data){
            resultGetPersons.statusCode = 204;
            return resultGetPersons
        }
        else{
            resultGetPersons.statusCode = 400;
            return resultGetPersons
        }
    }
}

export const editPerson = async (req) => {
    const resultEditPerson = await personaDal.editPerson( req );
    if(resultEditPerson.success){
        return resultEditPerson
    }
    else{
        resultEditPerson.statusCode = 400;
        return resultEditPerson
    }
}

export const getPersonsById = async ( id ) => {
    const resultGetPersons = await personaDal.getPersonsById(id)
    if(resultGetPersons.success){
        return resultGetPersons
    }
    else{
        if(resultGetPersons.data){
            resultGetPersons.statusCode = 204;
            return resultGetPersons
        }
        else{
            resultGetPersons.statusCode = 400;
            return resultGetPersons
        }
    }
}

export const deletePerson = async (req) => {
    const resultDeletePerson = await personaDal.deletePerson( req.params.id );
    if(resultDeletePerson.success){
        return resultDeletePerson
    }
    else{
        resultDeletePerson.statusCode = 400;
        return resultDeletePerson
    }
}