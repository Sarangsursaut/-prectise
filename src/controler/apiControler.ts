import responseMessage from '../constant/responseMessage';

import { Request, Response } from "express";
import httpResponse from '../utils/httpResponse';

export default {    
    self:(req:Request,res:Response)=>{  
        try {
            httpResponse(req,res, 200, responseMessage.SUCCESS);
        } catch {
            res.sendStatus(500);
        }
    }
}