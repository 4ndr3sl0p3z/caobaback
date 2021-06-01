import { Router }  from 'express';
import { isAdmin, verifyToken } from '../middlewares/auth';
import * as apartamentoLogic    from '../logic/apartamentoLogic';
import { responseTransaction } from '../middlewares/responseTransaction';

const router = Router();


router.get('/generate', [verifyToken, isAdmin] ,async (req, res ) => {
    const resultGenerate = await apartamentoLogic.generateAptos()
    responseTransaction(res, resultGenerate)
})

router.get('/all', [verifyToken] , async (req, res ) => {
    const resultGetAll = await apartamentoLogic.getAll()
    responseTransaction(res, resultGetAll)
})

router.post('/changeStatus', [verifyToken] , async (req, res ) => {
    const resultChangeStatus= await apartamentoLogic.changeStatus(req.body)
    responseTransaction(res, resultChangeStatus)
})

export default router;