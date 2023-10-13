import { uspacySdk } from '@uspacy/sdk';

const isDev = process.env.NODE_ENV === 'development';

export const login = (email: string, password: string): Promise<void> => {
	return new Promise(async (resolve, reject) => {
		if (!isDev) return resolve();
		if (!email || !password) return reject(new Error('invalid credentials'));
		try {
			await uspacySdk.authService.login({ email, password });
			resolve();
		} catch (err) {
			reject(err);
		}
	});
};
