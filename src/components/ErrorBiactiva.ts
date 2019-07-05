export class ErrorBiactiva extends Error {
    public internalMessage: string
    public userMessage: string
    public responseCode: number
    constructor(userMessage, internalMessage, responseCode = 500) {
        super(userMessage)
        this.internalMessage = internalMessage
        this.userMessage = userMessage
        this.responseCode = responseCode
    }
}