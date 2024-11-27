export const HttpResponse = {
	Continue: {
		code: 100,
		name: 'Continue',
		description: 'The server has received the request headers, and the client should proceed to send the request body.'
	},
	SwitchingProtocols: {
		code: 101,
		name: 'Switching Protocols',
		description: 'The requester has asked the server to switch protocols.'
	},
	EarlyHints: {
		code: 103,
		name: 'Early hints',
		description: 'The request has returned hints about relevant resources.'
	},
	Ok: {
		code: 200,
		name: 'OK',
		description: 'The request is OK.'
	},
	Created: {
		code: 201,
		name: 'Created',
		description: 'The request has been fulfilled.'
	},
	Accepted: {
		code: 202,
		name: 'Accepted',
		description: 'The request has been accepted for processing.'
	},
	NonAuthoritativeInformation: {
		code: 203,
		name: 'Non-Authoritative Information',
		description: 'The request has been successfully processed.'
	},
	NoContent: {
		code: 204,
		name: 'No Content',
		description: 'The request has been successfully processed.'
	},
	ResetContent: {
		code: 205,
		name: 'Reset Content',
		description: 'The request has been successfully processed.'
	},
	PartialContent: {
		code: 206,
		name: 'Partial Content',
		description: 'The server is delivering only part of the resource due to a range header sent by the client.'
	},
	BadRequest: {
		code: 400,
		name: 'Bad Request',
		description: 'The request cannot be fulfilled due to bad syntax.'
	},
	Unauthorized: {
		code: 401,
		name: 'Unauthorized',
		description: 'The request was a legal request.'
	},
	PaymentRequired: {
		code: 402,
		name: 'Payment Required',
		description: 'Reserved for future use.'
	},
	Forbidden: {
		code: 403,
		name: 'Forbidden',
		description: 'The request was a legal request.'
	},
	NotFound: {
		code: 404,
		name: 'Not Found',
		description: 'The requested resource could not be found but may be available again in the future.'
	},
	MethodNotAllowed: {
		code: 405,
		name: 'Method Not Allowed',
		description: 'A request was made of a page using a request method not supported by that page.'
	},
	NotAcceptable: {
		code: 406,
		name: 'Not Acceptable',
		description: 'The server can only generate a response that is not accepted by the client.'
	},
	ProxyAuthenticationRequired: {
		code: 407,
		name: 'Proxy Authentication Required',
		description: 'The client must first authenticate itself with the proxy.'
	},
	RequestTimeout: {
		code: 408,
		name: 'Request Timeout',
		description: 'The server timed out waiting for the request.'
	},
	Conflict: {
		code: 409,
		name: 'Conflict',
		description: 'The request could not be completed because of a conflict in the request.'
	},
	Gone: {
		code: 410,
		name: 'Gone',
		description: 'The requested resource is no longer available.'
	},
	LengthRequired: {
		code: 411,
		name: 'Length Required',
		description: 'The "Content-Length" is not defined. The server will not accept the request without it.'
	},
	Precondition: {
		code: 412,
		name: 'Precondition',
		description: ' Failed. The precondition given in the request evaluated to false by the server.'
	},
	RequestEntityTooLarge: {
		code: 413,
		name: 'Request Entity Too Large',
		description: 'The server will not accept the request.'
	},
	RequestUriTooLong: {
		code: 414,
		name: 'Request-URI Too Long',
		description: 'The server will not accept the request.'
	},
	UnsupportedMediaType: {
		code: 415,
		name: 'Unsupported Media Type',
		description: 'The server will not accept the request.'
	},
	RequestedRangeNotSatisfiable: {
		code: 416,
		name: 'Requested Range Not Satisfiable',
		description: 'The client has asked for a portion of the file.'
	},
	ExpectationFailed: {
		code: 417,
		name: 'Expectation Failed',
		description: 'The server cannot meet the requirements of the Expect request-header field.'
	},
	InternalServerError: {
		code: 500,
		name: 'Internal Server Error',
		description: 'An error occurred on the server.'
	},
	NotImplemented: {
		code: 501,
		name: 'Not Implemented',
		description: 'The server does not recognize the request method.'
	},
	BadGateway: {
		code: 502,
		name: 'Bad Gateway',
		description: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.'
	},
	ServiceUnavailable: {
		code: 503,
		name: 'Service Unavailable',
		description: 'The server is currently unavailable (overloaded or down).'
	},
	GatewayTimeout: {
		code: 504,
		name: 'Gateway Timeout',
		description: 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.'
	},
	HttpVersionNotSupported: {
		code: 505,
		name: 'HTTP Version Not Supported',
		description: 'The server does not support the HTTP protocol version used in the request.'
	},
	NetworkAuthenticationRequired: {
		code: 511,
		name: 'Network Authentication Required',
		description: 'The client needs to authenticate.'
	}
} as const;

export type HttpResponse = (typeof HttpResponse)[keyof typeof HttpResponse]

export type HttpCode = (typeof HttpResponse)[keyof typeof HttpResponse]['code']