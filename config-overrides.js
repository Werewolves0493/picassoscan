/* eslint @typescript-eslint/no-var-requires: "off" */
const webpack = require('webpack');

module.exports = function override(config, env) {
	const fallback = config.resolve.fallback || {};
	Object.assign(fallback, {
		crypto: require.resolve('crypto-browserify'),
		buffer: require.resolve('buffer'),
		stream: require.resolve('stream-browserify'),
		assert: require.resolve('assert'),
		http: require.resolve('stream-http'),
		https: require.resolve('https-browserify'),
		os: require.resolve('os-browserify'),
		url: require.resolve('url'),
	});
	// eslint-disable-next-line no-param-reassign
	config.resolve.fallback = fallback;
	// eslint-disable-next-line no-param-reassign
	config.plugins = (config.plugins || []).concat([
		new webpack.ProvidePlugin({
			process: 'process/browser',
			Buffer: ['buffer', 'Buffer'],
		}),
	]);
	return { ...config, ignoreWarnings: [/Failed to parse source map/] };
};
// ignoreWarnings: [/Failed to parse source map/]
