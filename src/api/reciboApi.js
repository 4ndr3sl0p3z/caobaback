import { Router } from 'express';
import { verifyToken } from '../middlewares/auth';
import * as reciboLogic from '../logic/reciboLogic';
import { responseTransaction } from '../middlewares/responseTransaction';

const router = Router();

router.get('/getReceiptByIdPay/:id', [verifyToken], async (req , res)=> {
    const result = await reciboLogic.getReceiptByIdPay(req.params.id);
    responseTransaction(res, result)
})

router.post('/addReceipt', [verifyToken], async (req , res)=> {
    const result = await reciboLogic.addReceipt(req.body);
    responseTransaction(res, result)
})

router.get('/getAllReceiptByStatusPending', [verifyToken], async (req , res)=> {
    const result = await reciboLogic.getAllReceiptByStatusPending();
    responseTransaction(res, result)
})

router.get('/approvePayment/:id', [verifyToken], async (req , res)=> {
    const result = await reciboLogic.approvePayment(req.params.id);
    responseTransaction(res, result)
})

router.post('/declinePayment', [verifyToken], async (req , res)=> {
    const result = await reciboLogic.declinePayment(req.body);
    responseTransaction(res, result)
})

export default router;