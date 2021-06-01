import { Router } from 'express';
import * as tipoIdLogic from '../logic/tipoIdLogic'
import { verifyToken } from '../middlewares/auth';
import { responseTransaction } from '../middlewares/responseTransaction';


const router = Router();

router.get('/getTypeId',[ verifyToken ], async (req, res) => {
    const resultGetTypeID = await tipoIdLogic.getAllTypeId(req.body);
    responseTransaction(res, resultGetTypeID)
})



export default router;