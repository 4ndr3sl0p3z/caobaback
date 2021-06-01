import { Router } from 'express';
import * as maestroPagoLogic from '../logic/maestroPagosLogic';
import { verifyToken } from '../middlewares/auth';
import { responseTransaction } from '../middlewares/responseTransaction';

const router = Router();

router.get('/get', verifyToken, async (req, res)=> {
    const resultGet = await maestroPagoLogic.getMs();
    responseTransaction(res, resultGet)
})

router.post('/edit', [verifyToken], async (req, res)=> {
    const resultEdit = await maestroPagoLogic.editMs(req.body);
    responseTransaction(res, resultEdit)
})

router.delete('/delete/:id', [verifyToken], async (req, res)=> {
    const resultDelete = await maestroPagoLogic.deleteMs(req.params.id);
    responseTransaction(res, resultDelete)
})

router.post('/create', [verifyToken], async (req, res)=> {
    const resultCreate = await maestroPagoLogic.create(req.body);
    responseTransaction(res, resultCreate)
})

export default router;
