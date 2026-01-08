export type ThttpsResponse = {
    success: boolean
    statusCode: number
    request: {
        ip?: string | null
        method: string
        url: string
    }
    Message: string
    data: unknown
}

export type ThttpError = {
    success: boolean
    statusCode: number
    request: {
        ip: string | null
        method: string
        url: string | undefined
    }
    Message: string
    data: null
    trace: { message: string; stack?: string } | null
}
