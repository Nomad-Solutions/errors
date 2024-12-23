import tseslint from 'typescript-eslint';
import base from '@nomad-solutions/dev-env/eslint/typescript';

export default tseslint.config(
	{
		ignores: [ 'CHANGELOG.md' ]
	},
	base,
);