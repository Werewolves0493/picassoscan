// import { TWalletBalancesDataRequest } from 'redux/reducers/wallets/types';
// import { IApiCalculateRateParams } from './api/swap/types';

export const endpoint = {
	auth: {
		LOGIN: '/login',
		REFRESH_TOKEN: 'token/refresh',
		REGISTRATION: '/register',
		LOGOUT: '/logout',
		RESET_PASSWORD: '/reset/password/email',
		RESET_PHONE_PASSWORD: '/reset/password/phone',
		NEW_PASSWORD: '/reset/password/email/user/password',
		NEW_PASSWORD_PHONE: '/reset/password/phone/user/password',
		NEW_PASSWORD_PHONE_TOKEN: '/reset/password/phone/user/token',
		RESET_EMAIL_CONFIRM: '/reset-token',
		EMAIL_CONFIRM: (token: string) => `/confirmation/email?token=${token}`,
		IP_CONFIRM: '/whitelist_ip',
		GENERATE_SMS: '/generate_sms',
		CONFIRM_PHONE: '/confirmation/phone',
		RESET_TWOFA: '/2fa/reset',
		RESEND_EMAIL: '/re_send_confirmation',
	},
	assets: {
		GET_ASSETS: '/assets?is_active_global=1',
		GET_ASSETS_BY_ID: (id: string) => `swap/assets?id=${id}`,
		ASSET_PAIRS: (id: string) => `/asset_pairs/${id}`,
		GET_GRAPH: (idPair: string, period: string) => `/candles/${idPair}/${period}`,
		POST_ASSET: `/swap/assets/add_asset`,
	},
	settings: {
		USER_SETTINGS: '/user',
		CHANGE_PASSWORD: '/user/change/password',
		POST_USER_PROFILE: 'user/profile',
		POST_USER_AVATAR: 'user/avatar',

		// 2FA New
		SEND_EMAIL_CODE: '/2fa/email/code',
		ENABLE_EMAIL_2FA: '/settings/2fa/email/enable',
		DISABLE_EMAIL_2FA: '/settings/2fa/email/disable',
		GENERATE_GOOGLE_2FA_KEY: '/settings/2fa/generate_secret_key',
		ENABLE_GOOGLE_2FA: '/settings/2fa/enable',
		DISABLE_GOOGLE_2FA: '/settings/2fa/disable',
		// 2FA Old (to delete)
		ENABLE_2FA: '/settings/2fa/enable',
		DISABLE_2FA: '/settings/2fa/disable',
		GENERATE_2FA_KEY: '/settings/2fa/generate_secret_key',
		CHECK_ENABLED_2FA: '/settings/2fa/check_enabled',

		SET_PHONE: '/user_settings/set_phone',
		CHECK_NOTIFICATION: '/user_settings/notification_settings',
		UPDATE_NOTIFICATION: '/user_settings/notification_settings',
		REFERRALS: '/user/referrals',
		NATIONALITIES: '/nationalities',
	},
	swap: {
		GET_ASSETS: '/swap/assets',
		GET_PAIRS: '/swap/pairs',
		// CALCULATE_RATE: ({ firstAddress, secondAddress, amount }: IApiCalculateRateParams) => {
		// 	return `/swap/calculate_new/${String(firstAddress)}/${String(secondAddress)}/${amount}/0`;
		// },
		TRANSACTION_SWAP: '/swap/transaction',
		TOP_TOKENS: '/swap/top_tokens',
		TOP_POOLS: '/swap/top_pools',
		GET_GRAPH_PRICE: '/swap/graph_price_size',
		GET_POOLS: (address: string) => `/swap/pools/${address?.toLocaleLowerCase()}`,
		GET_LIQUIDITY_PAIR: (wallet: string, token: string) =>
			`/swap/pools/${wallet?.toLocaleLowerCase()}?pair_id=${token}`,
		GET_TLV: (tokenId: number) => `/swap/tlv/${tokenId}`,
		TRANSACTION_TOKEN_HASH: '/swap/add_allowance_hash',
		TRY_ASSET_TOKEN_CHECK: '/assets/check',
		GET_TOKENS_LIST: '/swap/gato_chain/token_list',
	},
	// wallet: {
	// 	ADD_WALLET: 'user/wallet',
	// 	GET_BALANSE: (token: string, address: string) => `user/wallet/balance/${token}/${address}`,
		// GET_WALLETS_BALANSE: (payload: TWalletBalancesDataRequest) => {
		// 	return `user/wallet/balances/${String(payload.address.toLocaleLowerCase())}${
		// 		payload?.current_page ? `?current_page=${String(payload?.current_page)}` : ''
		// 	}${payload?.per_page ? `&per_page=${String(payload?.per_page)}` : ''}${
		// 		payload?.hide_null ? '&hide_null=1' : ''
		// 	}`;
		// },
		// GET_WALLETS_BALANSE: (payload: TWalletBalancesDataRequest) => {
		// 	return `user/wallet/balances/${String(payload.address)}?${
		// 		payload?.hide_null ? 'hide_null=1&' : ''
		// 	}asset=${String(payload.asset)}`;
		// },

	// 	GET_TRANSACTIONS_HISTORY: 'user/wallet/transactions',
	// },
	// blockchain: {
	// 	GET_BLOCKS: '/blockchain/blocks',
	// 	GET_BLOCK: (blockId: string) => `/blockchain/block/${blockId}`,
	// 	GET_BLOCK_LAST: '/blockchain/blocks/last',
	// 	GET_TRANSACTIONS: '/blockchain/transactions',
	// 	GET_TRANSACTION: (transactionId: string) => `/blockchain/transaction/${transactionId}`,
	// 	GET_TRANSACTIONS_LAST: '/blockchain/transactions/last',
	// 	GET_STATISTIC: '/blockchain/statistic',
	// 	GET_TRANSACTIONS_GRAPH: '/graphic/transactions',
	// 	GET_TRANSACTIONS_COUNT: '/blockchain/transactions/count',
	// 	GET_LAST_NUMBER: '/blockchain/blocks/last_number',
	// 	GET_BLOCK_PREV_NEXT: (num: string) => `/blockchain/block_prev_next/${num}`,
	// 	GET_ADDRESS: (hash: string) => `/blockchain/address/${hash}`,
	// },
	// tokens: {
	// 	TOKENS: '/blockchain/tokens',
	// 	TOKEN: (token: string | number) => `/blockchain/token/${token}`,
	// 	TOKEN_TRANSACTIONS: (
	// 		token: string | number,
	// 		per_page: string | number,
	// 		current_page: string | number,
	// 	) =>
	// 		`/blockchain/token/${token}/transactions?per_page=${per_page}&current_page=${current_page}`,
	// 	TOKEN_HOLDERS: (
	// 		token: string | number,
	// 		per_page: string | number,
	// 		current_page: string | number,
	// 	) => `/blockchain/token/${token}/holders?per_page=${per_page}&current_page=${current_page}`,
	// },
	// search: {
	// 	SEARCH: (text: string) => `/blockchain/search/${text}`,
	// },
	// referral: {
	// 	REFERRAL: '/referral',
	// 	REFERRAL_WALLET: '/referral/wallet',
	// 	REFERRAL_WALLET_GUSD: '/referral/wallet/gusd',
	// 	SEND_TRANSACTION: '/referral/claim',
	// 	GET_B2B: '/referral/b2b',
	// 	GET_B2B_BALANCE: 'referral/b2b/balance',
	// 	GET_B2B_SIGNATURE: 'referral/b2b/signature',
	// 	GET_B2C_SIGNATURE: 'referral/signature',
	// },
	// earnings: {
	// 	STAKING: '/staking',
	// 	UPDATE_REWARD: 'staking/update_reward',
	// 	STAKING_TRANSACTION: '/staking/add_hash',
	// 	CALCULATE_APY: '/staking/calculate_apy',
	// 	PROFITS: 'user/profit',
	// 	CLAIM_TRANSACTIONS: '/dividend/claim',
	// 	UNSTAKE_TRANSACTIONS: '/dividend/unfroze',
	// },
	// dividends: {
	// 	GET_DIVIDENDS: '/dividend',
	// 	STAKE: 'dividend/stake',
	// },
};
