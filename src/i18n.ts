// eslint-disable-next-line import/no-named-as-default
import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next)
	.use(
		resourcesToBackend((language: string, namespace: string, callback) => {
			import(`./locales/${language}/${namespace}.json`)
				.then((resources) => {
					callback(null, resources);
				})
				.catch((error) => {
					callback(error, null);
				});
		}),
	)
	.init({
		fallbackLng: 'uk',
	});

export default i18n;
