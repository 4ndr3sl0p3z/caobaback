import * as reciboDal from '../dal/recibosDal';

export const getReceiptByIdPay = async (id) =>{
    const resultGetReceipt = await reciboDal.getReceiptByIdPay(id);
    if(resultGetReceipt.success){
        return resultGetReceipt
    }
    else{
        if(resultGetReceipt.data){
            resultGetReceipt.statusCode = 204;
            return resultGetReceipt
        }
        else{
            resultGetReceipt.statusCode = 400;
            return resultGetReceipt
        }
    }
}

export const addReceipt = async ( body ) => {
    const resultAddReceipt = await reciboDal.addReceipt( body );
    if(resultAddReceipt.success){
        return resultAddReceipt
    }
    else{
        resultAddReceipt.statusCode = 400;
        return resultAddReceipt
    }
}

export const getAllReceiptByStatusPending = async () => {
    const resultGetReceiptByStatusPending = await reciboDal.getAllReceiptByStatusPending();
    if(resultGetReceiptByStatusPending.success){
        return resultGetReceiptByStatusPending
    }
    else{
        if(resultGetReceiptByStatusPending.data){
            resultGetReceiptByStatusPending.statusCode = 204;
            return resultGetReceiptByStatusPending
        }
        else{
            resultGetReceiptByStatusPending.statusCode = 400;
            return resultGetReceiptByStatusPending
        }
    }
}

export const approvePayment = async (id) => {
    const resultApprovePayment = await reciboDal.approvePayment( id );
    if(resultApprovePayment.success){
        return resultApprovePayment
    }
    else{
        resultApprovePayment.statusCode = 400;
        return resultApprovePayment
    }
}

export const declinePayment = async (body) => {
    const resultDeclinePayment = await reciboDal.declinePayment( body );
    if(resultDeclinePayment.success){
        return resultDeclinePayment
    }
    else{
        resultDeclinePayment.statusCode = 400;
        return resultDeclinePayment
    }
}