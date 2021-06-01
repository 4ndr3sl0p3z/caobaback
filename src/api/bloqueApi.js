import { Router } from 'express';
import * as bloqueLogic from '../logic/bloqueLogic';
import { verifyToken } from '../middlewares/auth';
import { responseTransaction } from '../middlewares/responseTransaction';

const router = Router();

router.get('/getBlocks', verifyToken, async (req, res)=> {
    const resultGetBlock = await bloqueLogic.getAllBlocks(req.body);
    responseTransaction(res, resultGetBlock)
})

router.put('/editBlock/:id', [verifyToken], async (req, res)=> {
    const resultEditBlock = await bloqueLogic.editBlock(req);
    responseTransaction(res, resultEditBlock)
})

router.delete('/deleteBlock/:id', [verifyToken], async (req, res)=> {
    const resultDeleteBlock = await bloqueLogic.deleteBlock(req.params.id);
    responseTransaction(res, resultDeleteBlock)
})

router.post('/createBlock', [verifyToken], async (req, res)=> {
    const resultCreateBlock = await bloqueLogic.createBlock(req.body);
    responseTransaction(res, resultCreateBlock)
})

export default router;
