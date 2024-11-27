import { consola, createConsola } from 'consola';
import { colorize } from 'consola/utils';
import { HttpError } from './errors';
import { isError, isHttpError } from './assertions';

const consolaNoDate = createConsola({
	level: 0,
	formatOptions: {
		date: false,
	},
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function catchError<T, E extends new (...args: any[]) => Error>(promise: Promise<T>, errorsToCatch?: E[]): Promise<[T, undefined] | [undefined, InstanceType<E>]> {
	return promise.then((data): [T, undefined] => {
		return [ data, undefined ];
	}).catch((error): [undefined, InstanceType<E>] => {
		if (!errorsToCatch?.length) {
			return [ undefined, error ];
		}
		
		if (errorsToCatch.some(e => error instanceof e)) {
			return [ undefined, error ];
		}

		throw error;
	});
}

export function formatErrorMessage(name: string, desc: string) {
	return `${name}: ${desc}`;
}

export function logTraceableError(error: unknown, withDate = true) {
	logError(error, withDate);

	if (isError(error) && error.cause) {
		// eslint-disable-next-line no-console
		console.debug(colorize('black', colorize('bgCyan', ' CAUSED BY ')));

		logError(error.cause, false);
	} else {
		// eslint-disable-next-line no-console
		console.log('\n'); // newline to separate errors more clearly
	}
}

function logError(error: unknown, withDate = true) {
	if (isHttpError(error)) {
		logHttpError(error, withDate);
	} else if (isError(error)) {
		logBuiltinError(error, withDate);
	} else {
		if (withDate) {
			consola.error(error);
			return;
		}
	}
}

function logHttpError(error: HttpError, withDate = true) {
	if (withDate) {
		consola.error(error.name, colorize('bold', error.statusCode) + ':', error );
		return;
	}

	consolaNoDate.error(error.name, colorize('bold', error.statusCode) + ':', error );
}

function logBuiltinError(error: Error, withDate = true) {
	if (withDate) {
		consola.error(error.name + ':', error);
		return;
	}
	
	consolaNoDate.error(error.name + ':', error);
}