import { Router } from 'express';
import { verifyToken } from '../middlewares/auth';
import * as personaLogic from '../logic/personaLogic';
import { responseTransaction } from '../middlewares/responseTransaction';


const router = Router();

router.post('/createPerson', [verifyToken], async (req, res) => {
    const resultCreatePerson = await personaLogic.createPerson(req.body);
    responseTransaction(res, resultCreatePerson)
})

router.delete('/deletePerson', [verifyToken], async (req, res) => {

})

router.put('/editPerson/:id', [verifyToken], async (req, res) => {
    const resultEditPerson = await personaLogic.editPerson(req);
    responseTransaction(res, resultEditPerson)
})

router.post('/getPersonsByBlockAndFloor', [verifyToken], async (req, res)=>{
    const resultGetPersons = await personaLogic.getPersonsByBlockAndFloor(req.body);
    responseTransaction(res, resultGetPersons)
})

router.get('/getPersonById/:id', [verifyToken], async (req, res) => {
    const resultGetPersons = await personaLogic.getPersonsById(req.params.id);
    responseTransaction(res, resultGetPersons)
})

router.delete('/deletePerson/:id', [verifyToken], async (req, res) => {
    const resultDeletePerson = await personaLogic.deletePerson(req);
    responseTransaction(res, resultDeletePerson)
})

export default router;