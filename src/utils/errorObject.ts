import { Request, Response } from 'express'
import { ThttpError } from '../types/type'

// Extend the Express Response type to include errorObject
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Express {
        interface Response {
            errorObject?: ThttpError
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
const createErrorObject = (err: Error | unknown, req: Request, res: Response, errorStatusCode: number = 500): ThttpError => {
    const errorObject: ThttpError = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl,
        },
        Message: err instanceof Error ? err.message || 'Something went wrong' : 'Something went wrong',
        data: null,
        trace:
            process.env.NODE_ENV === 'development' && err instanceof Error
                ? {
                      message: err.message,
                      ...(err.stack && { stack: err.stack }),
                  }
                : null,
    }

    // Assign the error object to the response
    res.errorObject = errorObject
    return errorObject
}

export default createErrorObject
