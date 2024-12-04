import { isHttpError } from './assertions';
import { HttpResponse } from './http-responses';
import { formatErrorMessage, logTraceableError } from './utils';

// This can be passed directly to Elysia.onError
export function onError({ error, set }: {
	error: unknown,
	set: { status: number }
}) {
	logTraceableError(error);

	if (isHttpError(error)) {
		set.status = error.statusCode;

		return formatErrorMessage(error.name, error.message) || error.httpMessage;
	}

	// All non-custom errors are treated as 500 Internal Server Error and message is obscured
	set.status = HttpResponse.InternalServerError.code;

	return formatErrorMessage(HttpResponse.InternalServerError.name, HttpResponse.InternalServerError.description);
}