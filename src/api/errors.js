// Shameless copying of the gRPC error types, since they seem to be a nice fit for most
// error cases.

export class APIError extends Error {
  constructor(...args) {
    super(...args)
    Error.captureStackTrace(this, APIError)
  }
}

// gRPC 1, HTTP 499
export class CanceledError extends APIError {}

// gRPC 2, HTTP 500
export class UnknownError extends APIError {}

// gRPC 3, HTTP 400
export class InvalidArgumentError extends APIError {}

// gRPC 4, HTTP 504
export class DeadlineExceededError extends APIError {}

// gRPC 5, HTTP 404
export class NotFoundError extends APIError {}

// gRPC 6, HTTP 409
export class AlreadyExistsError extends APIError {}

// gRPC 7, HTTP 403
export class PermissionDeniedError extends APIError {}

// gRPC 8, HTTP 429
export class ResourceExhaustedError extends APIError {}

// gRPC 9, HTTP 400
export class FailedPreconditionError extends APIError {}

// gRPC 10, HTTP 409
export class AbortedError extends APIError {}

// gRPC 11, HTTP 400
export class OutOfRangeError extends APIError {}

// gRPC 12, HTTP 501
export class UnimplementedError extends APIError {}

// gRPC 13, HTTP 500
export class InternalError extends APIError {}

// gRPC 14, HTTP 503
export class UnavailableError extends APIError {}

// gRPC 15, HTTP 500
export class DataLossError extends APIError {}

// gRPC 16, HTTP 401
export class UnauthenticatedError extends APIError {}

const httpErrorMapping = {
  499: CanceledError,
  500: UnknownError,
  400: InvalidArgumentError,
  504: DeadlineExceededError,
  404: NotFoundError,
  409: AlreadyExistsError,
  403: PermissionDeniedError,
  429: ResourceExhaustedError,
  501: UnimplementedError,
  503: UnavailableError,
  401: UnauthenticatedError
}

export const raiseHTTPError = (code, body) => {
  var errClass = httpErrorMapping[code]
  if (!errClass) {
    errClass = APIError
  }
  throw new errClass(body)
}
