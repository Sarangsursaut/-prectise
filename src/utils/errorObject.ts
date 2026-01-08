import { Request, Response } from "express";
import { ThttpError } from "../types/type";
import responseMessage from "../constant/responseMessage";

export default (err:Error|unknown, req:Request,res:Response,errorStatusCode:number=500):ThttpError=>{ 
    const errorObject:ThttpError = {
        success:false,
        statusCode:errorStatusCode,
        request:{
            ip:req.ip || null,
            method:req.method,
            url:req?.originalUrl
        },
        Message:err instanceof Error ? err.message || responseMessage.SOMETHING_WENT_WRONG : responseMessage.SOMETHING_WENT_WRONG,
        data:null,
        trace: err instanceof Error ? (error:err.stack) : null
    }
    res.errorObject  
}