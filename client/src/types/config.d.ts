export type ConfigPropsType<T> = { [config in ConfigProps]: T }

export type ConfigProps =
	| 'APP_MODE'
	| 'APP_NAME'
	| 'WEB_TITLE'
	| 'APP_CLIENT_SIDE'
	| 'API_BASE_URL'
	| 'API_SECRET_KEY'
	| 'APP_AUTH'
	| 'APP_USER'
	| 'APP_LANG'
	| 'AUTH_TOKEN'
	| 'CONTENT_LANG'
	| 'XSRF_TOKEN'
	| 'X_CSRF_TOKEN'
