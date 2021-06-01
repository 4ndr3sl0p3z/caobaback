import { Router } from 'express';
import { verifyToken } from '../middlewares/auth';
import * as pagoLogic from '../logic/pagoLogic';
import { responseTransaction } from '../middlewares/responseTransaction';

const router = Router();

router.get('/getAllPendingForPayByUserId', [verifyToken], async (req, res)=> {
    const result = await pagoLogic.getAllPendingForPayByUserId(req.body);
    responseTransaction(res, result)
})

router.get('/getAllPayedByUserId', [verifyToken], async (req, res)=> {
    const result = await pagoLogic.getAllPayedByUserId(req.body);
    responseTransaction(res, result)
})

export default router