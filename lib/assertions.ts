import { HttpError, InitializationError } from './errors';

export function isError(error: unknown): error is Error {
	return error instanceof Error;
}

export function isHttpError(error: unknown): error is HttpError {
	return error instanceof HttpError;
}

export function isInitializationError(error: unknown): error is InitializationError {
	return error instanceof isInitializationError;
}