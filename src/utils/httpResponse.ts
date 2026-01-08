import config from "../config/config"
import { ThttpsResponse } from "../types/type"
import { Request, Response } from "express"

export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, data: unknown=null) => {
    const response:ThttpsResponse = {
        success: true,
        statusCode: responseStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req?.originalUrl
        },
        Message: responseMessage,
       
        data:data
    }
    //log
    console.info('controler_response',{
        meta:response
    })

    //prodution ENV Check
    if (config.ENV === 'production') {
       delete response.request.ip
    }
    res.status(responseStatusCode).json(response)
}