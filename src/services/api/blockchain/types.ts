import { EStatusName } from '../../../components/Transactions/types';

export interface IBlockchainApi {
	getBlocks: (params?: IApiBlocksRequest) => Promise<IApiBlocksResponse>;
	getBlocksLast: () => Promise<IBlock[]>;
	getTransactions: (params?: IApiTransactionsRequest) => Promise<IApiTransactionsResponse>;
	getTransactionsLast: () => Promise<ITransaction[]>;
	getTransactionsCount: () => Promise<IApiTransactionsCountResponse>;
	getTransactionsGraph: () => Promise<ITransactionsGraph[]>;
	getStatistic: () => Promise<IApiStatisticResponse>;
	getBlock: (payload: string) => Promise<IBlock[]>;
	getTransaction: (payload: string) => Promise<ITransaction[]>;
	getBlocksCount: () => Promise<IApiBlocksCountResponse>;
	getBlockPrevNext: (payload: string) => Promise<IApiPrevNextResponse>;
	getAddress: (payload: string) => Promise<IApiAddressResponse>;
}

export interface IApiAddressResponse {
	id: number;
	fetched_coin_balance: string;
	fetched_coin_balance_block_number: number;
	hash: string;
	nonce: string;
	transactions_count: number;
	token_transfers_count: number;
	address_coin_balance: string;
	address_token_balance: IAddressTokenBalance[];
	transactions: ITransaction[];
	token_transfer: ITokenTransfer[];
	internal_transactions: IInternalTransaction[];
	gasUsed: string;
	fetchedCoinBalanceFormatted: string;
}

export interface IAddressTokenBalance {
	id: number;
	address_id: number;
	token_contract_id: number;
	address_hash: string;
	token_contract_address_hash: string;
	block_number: number;
	value: string;
	value_fetched_at: number;
	old_value: string;
	token_type: string;
	percent: string;
	token: IToken;
}

export interface IApiPrevNextResponse {
	next: string;
	prev: string;
}

export interface IApiBlocksRequest {
	current_page?: string;
	per_page?: string;
}

export interface IApiTransactionsRequest {
	current_page?: string;
	per_page?: string;
}
export interface IApiBlocksResponse {
	current_page: number;
	data: IBlock[];
	last_page: number;
	per_page: number;
	to: number;
	total: number;
}

export interface IBlock {
	id: number;
	hash: string;
	parent_hash: string;
	confirmations: number;
	miner_hash: string;
	nonce: string;
	consensus: boolean;
	difficulty: string;
	gas_limit: string;
	gas_used: string;
	number: string;
	size: number;
	total_difficulty: string;
	refetch_needed: boolean;
	base_fee_per_gas: null;
	is_empty: boolean;
	timestamp: string;
	created_at: string;
	updated_at: string;
	transactionCount: number;
	reward: IReward;
	fee: string;
	transaction: ITransaction[];
}

export interface IReward {
	id: number;
	addresses_id: number;
	blocks_id: number;
	address_hash: string;
	address_type: string;
	block_hash: number;
	reward: string;
	created_at: string;
	updated_at: string;
}

export interface IApiTransactionsResponse {
	current_page: number;
	data: ITransaction[];
	last_page: number;
	per_page: number;
	to: number;
	total: number;
}

export interface ITransaction {
	id: number;
	block_id: number;
	from_address_id: number;
	to_address_id: number;
	asset: IAsset;
	// created_contract_address_id: null;
	cumulative_gas_used: string;
	error: string;
	gas: string;
	gas_price: string;
	gas_used: string;
	hash: string;
	index: number;
	input: string;
	nonce: number;
	r: string;
	s: string;
	v: string;
	status: keyof typeof EStatusName;
	value: string;
	block_hash: string;
	block_number: number;
	from_address_hash: string;
	to_address_hash: string;
	// created_contract_address_hash: null;
	// created_contract_code_indexed_at: null;
	// earliest_processing_start: null;
	old_block_hash: string;
	revert_reason: string;
	// max_priority_fee_per_gas: null;
	// max_fee_per_gas: null;
	type: string;
	method_selector: string;
	has_error_in_internal_txs: boolean;
	currency: string;
	created_at: string;
	updated_at: string;
	fee: ITransactionFee;
	token_transfer: ITokenTransfer[];
	token: IToken;
	internal_transaction: IInternalTransaction[];
	log: ILog[];
	confirmationTime: string;
	input_decoded: string;
	position: number;
}

export interface IAsset {
	address: string;
	chainId: string;
	commission_type: string | null;
	commission_value: string | null;
	contract_hash: string | null;
	created_at: string;
	created_by_admin: boolean;
	decimals: number;
	description: string | null;
	id: number;
	is_active: boolean;
	is_active_global: boolean;
	logo: string;
	max_amount: string | null;
	mint: string | null;
	name: string;
	price_in_stable_coin: string;
	price_in_usd: string;
	reserve_usd_in_pools_24h: string;
	status: string;
	symbol: string;
	target_wallet_address: string;
	total_supply: string;
	type: string;
	updated_at: string;
	user_id: string | null;
	wallet_id?: string | null;
	order?: string | null;
	website_url: string | null;
	circulating_supply?: number | null;
}

export interface ITransactionFee {
	asset: string;
	fee: string;
	price_in_usd: string;
	gas_price: string;
}

export interface ILog {
	id: number;
	block_id: number;
	transaction_id: number;
	transaction_hash: string;
	block_hash: string;
	block_number: number;
	data: string;
	index: number;
	first_topic: string;
	second_topic: string;
	third_topic: string;
	fourth_topic: null;
	address_hash: string;
	created_at: null;
	updated_at: null;
}

export interface IInternalTransaction {
	id: number;
	block_id: number;
	transaction_id: number;
	from_address_id: number;
	to_address_id: number;
	created_contract_address_id: null;
	call_type: null;
	error: string;
	gas: string;
	gas_used: string;
	index: number;
	input: string;
	trace_address: null;
	type: string;
	value: string;
	created_contract_address_hash: null;
	from_address_hash: string;
	to_address_hash: string;
	transaction_hash: string;
	block_number: number;
	transaction_index: 0;
	block_hash: string;
	block_index: null;
	created_at: string;
}

export interface ITokenTransfer {
	id: number;
	from_address_id: number;
	to_address_id: number;
	explorer_token_id: number;
	transaction_id: number;
	block_id: number;
	transaction_hash: string;
	log_index: number;
	from_address_hash: string;
	to_address_hash: string;
	amount: string;
	amountFormatted: string;
	type: string;
	hash: string;
	token_contract_address_hash: string;
	block_number: number;
	block_hash: string;
	created_at: string;
	updated_at: string;
	token: IToken;
}

export interface IToken {
	id: number;
	contract_address_id: number;
	contract_address_hash: string;
	name: string;
	symbol: string;
	total_supply: string;
	decimals: string;
	type: string;
	created_at?: string;
	updated_at?: string;
	is_rejected?: boolean;
	asset: IAsset;
	holder_count: number;
	skip_metadata: null;
	order: null;
	logo: string;
	transfersCount: number;
}

export interface IApiTransactionsCountResponse {
	transactions_count: number;
}

export interface IApiBlocksCountResponse {
	last_block: number;
}

export interface ITransactionsGraph {
	id: number;
	date: string;
	number_of_transactions: number;
	gas_used: string;
	total_fee: string;
}

export interface IApiStatisticResponse {
	gato_coin_price: string;
	tlv: any;
	average_block_time: string;
	total_transactions: number;
	total_blocks: number;
	wallet_addresses: number;
	daily_transactions: number;
	gas_price: number;
}
