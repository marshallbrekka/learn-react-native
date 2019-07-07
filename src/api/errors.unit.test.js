import * as errors from './errors'

describe('raiseHTTPError', () => {
  it('raises CanceledError on 499', () => {
    expect(() => { errors.raiseHTTPError(499, "foo") }).toThrow(errors.CanceledError);
  });

  it('raises UnknownError on 500', () => {
    expect(() => { errors.raiseHTTPError(500, "foo") }).toThrow(errors.UnknownError);
  });

  it('raises InvalidArgumentError on 400', () => {
    expect(() => { errors.raiseHTTPError(400, "foo") }).toThrow(errors.InvalidArgumentError);
  });

  it('raises DeadlineExceededError on 504', () => {
    expect(() => { errors.raiseHTTPError(504, "foo") }).toThrow(errors.DeadlineExceededError);
  });

  it('raises NotFoundError on 404', () => {
    expect(() => { errors.raiseHTTPError(404, "foo") }).toThrow(errors.NotFoundError);
  });

  it('raises AlreadyExistsError on 409', () => {
    expect(() => { errors.raiseHTTPError(409, "foo") }).toThrow(errors.AlreadyExistsError);
  });

  it('raises PermissionDeniedError on 403', () => {
    expect(() => { errors.raiseHTTPError(403, "foo") }).toThrow(errors.PermissionDeniedError);
  });

  it('raises ResourceExhaustedError on 429', () => {
    expect(() => { errors.raiseHTTPError(429, "foo") }).toThrow(errors.ResourceExhaustedError);
  });

  it('raises UnimplementedError on 501', () => {
    expect(() => { errors.raiseHTTPError(501, "foo") }).toThrow(errors.UnimplementedError);
  });

  it('raises UnavailableError on 503', () => {
    expect(() => { errors.raiseHTTPError(503, "foo") }).toThrow(errors.UnavailableError);
  });

  it('raises UnauthenticatedError on 401', () => {
    expect(() => { errors.raiseHTTPError(401, "foo") }).toThrow(errors.UnauthenticatedError);
  });
})
