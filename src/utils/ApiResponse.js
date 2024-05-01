class ApiResponse {
  // giving the standard response format or structure for all the responses to make it production ready
  constructor(statusCode,data,message="Success") {
    this.statusCode = statusCode
    this.data = data
    this.message = message
    this.success = statusCode <400 

  }
}


export {ApiResponse}