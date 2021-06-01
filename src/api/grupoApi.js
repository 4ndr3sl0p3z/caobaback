import { Router } from 'express';
import { verifyToken } from '../middlewares/auth';
import * as groupLogic from '../logic/grupoLogic';
import { responseTransaction } from '../middlewares/responseTransaction';


const router = Router();

router.post('/getGroupByUser', [verifyToken], async (req, res) => {
    const resultGetGroup = await groupLogic.getGroupByUser(req.body);
    responseTransaction(res, resultGetGroup)
})

export default router;