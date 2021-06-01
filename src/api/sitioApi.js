import { Router } from 'express';
import * as sitioLogic from '../logic/sitioLogic';
import { verifyToken } from '../middlewares/auth';
import { responseTransaction } from '../middlewares/responseTransaction';

const router = Router();

router.get('/getSites', [ verifyToken ], async (req, res)=>{
    const getAllSites = await sitioLogic.getAllSites();
    responseTransaction(res, getAllSites)
})

router.put('/editSite/:id', [verifyToken], async (req, res)=> {
    const resultEditSite = await sitioLogic.editSite(req);
    responseTransaction(res, resultEditSite)
})

router.delete('/deleteSite/:id', [verifyToken], async (req, res)=> {
    const resultDeleteSite = await sitioLogic.deleteSite(req.params.id);
    responseTransaction(res, resultDeleteSite)
})

router.post('/createSite', [verifyToken], async (req, res)=> {
    const resultCreateSite = await sitioLogic.createSite(req.body);
    responseTransaction(res, resultCreateSite)
})

export default router;