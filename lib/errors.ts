import { HttpResponse, type HttpCode } from './http-responses';
import { formatErrorMessage } from './utils';

export abstract class HttpError extends Error {
	abstract readonly statusCode: HttpCode
	abstract readonly httpName: HttpResponse['name']
	abstract readonly httpDescription: HttpResponse['description']
	
	get httpMessage() {
		return formatErrorMessage(this.httpName, this.httpDescription);
	}

	constructor(message?: string, originalError?: unknown) {
		super(message, { cause: originalError });
	}

	inspect() {
		return 'lol';
	}
}

export class NotFoundError extends HttpError {
	name = 'NotFoundError' as const;
	statusCode = HttpResponse.NotFound.code;
	httpName = HttpResponse.NotFound.name;
	httpDescription = HttpResponse.NotFound.description;
}