import * as RNetscript from '../../src';

describe('fetch url', () => {
	test('command should execute', () => {
		const command = `{fetch 'https://www.rnet.cf/'}`;

		return RNetscript.execute(command, {env: {channel: '297513296288940042'}});
	});
});
