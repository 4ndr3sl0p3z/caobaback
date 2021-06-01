import { Router } from 'express'
import * as usuarioLogic from '../logic/usuarioLogic';
import { isAdmin, verifyToken } from '../middlewares/auth';
import { responseTransaction } from '../middlewares/responseTransaction';

const router = Router();

router.post('/login', async (req, res) => {
    const result = await usuarioLogic.Login(req)
    responseTransaction(res ,result)
})

router.post('/createUser', async (req, res) => {
    const result = await usuarioLogic.createUser(req)
    responseTransaction(res ,result)
})

router.post('/getUserByNumeroApto', [verifyToken, isAdmin], async (req, res)=> {
    const result = await usuarioLogic.getUserByNumeroApto(req.body)
    responseTransaction(res ,result)
})

router.delete('/deleteUser/:id', [verifyToken, isAdmin], async (req, res)=> {
    const result = await usuarioLogic.deleteUser(req.params.id)
    responseTransaction(res ,result)
})


export default router;