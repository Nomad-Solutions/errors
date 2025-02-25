import type { ValidationError } from 'elysia';
import type { InitializationError } from './errors';
import { HttpError } from './errors';

export function isError(error: unknown): error is Error {
	return error instanceof Error;
}

export function isHttpError(error: unknown): error is HttpError {
	return error instanceof HttpError;
}

export function isElysiaValidationError(error: unknown): error is ValidationError {
	return isObject(error) && 'code' in error && error.code === 'VALIDATION';
}

export function isInitializationError(error: unknown): error is InitializationError {
	return error instanceof isInitializationError;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is how Error is actually typed
export function isErrorOfType<TKnown extends new (...args: any[]) => Error>(error: unknown, ErrorType: TKnown): error is TKnown {
	return error instanceof ErrorType;
}

function isObject(val: unknown) {
	return typeof val === 'object' && val !== null;
}