import { Router } from 'express';
import * as pisoLogic from '../logic/pisoLogic';
import { verifyToken } from '../middlewares/auth';
import { responseTransaction } from '../middlewares/responseTransaction';

const router = Router();

router.get('/getFloors', async (req, res)=> {
    const resultGetFloors = await pisoLogic.getAllFloors(req.body);
    responseTransaction(res, resultGetFloors)
})

router.put('/editFloor/:id', [verifyToken], async (req, res)=> {
    const resultEditFloor = await pisoLogic.editFloor(req);
    responseTransaction(res, resultEditFloor)
})

router.delete('/deleteFloor/:id', [verifyToken], async (req, res)=> {
    const resultDeleteFloor = await pisoLogic.deleteFloor(req.params.id);
    responseTransaction(res, resultDeleteFloor)
})

router.post('/createFloor', [verifyToken], async (req, res)=> {
    const resultCreateFloor = await pisoLogic.createFloor(req.body);
    responseTransaction(res, resultCreateFloor)
})

export default router;