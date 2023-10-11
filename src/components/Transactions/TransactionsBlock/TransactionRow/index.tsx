import { ArrowRight } from '@/assets/custom-icons';
import { EStatusName } from '@/components/Transactions/types';
import { formatDistance } from 'date-fns';
import { useMoneyFormat } from '@/hooks/useMoneyFormat';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ITransaction } from '@/services/api/blockchain/types';
import { capitalize, capitalizeAll, shortNotation } from '@/services/utils/textSlice';

const TransactionRow: FC<ITransaction> = ({
	type,
	created_at,
	block_number,
	block_hash,
	hash,
	from_address_hash,
	to_address_hash,
	method_selector,
	token_transfer,
	fee,
	currency,
	status,
	error,
	revert_reason,
}) => {
	const moneyFormat = useMoneyFormat();
	return (
		<div className="block-item block-item--transaction">
			<div className="block-item__left">
				<div
					className={`block-number block-number--${type.split('_')[1] || type.split('_')[0]}${
						error === '1' ? '-error' : ''
					}`}
				>
					<p className="block-number__hex">{capitalizeAll(type.replace('_', ' '))}</p>
					<p className="block-number__type">
						{status === 'failed' ? `Error:(${revert_reason})` : EStatusName[status]}
					</p>
				</div>
				<div className="transactions-info">
					<div className="transactions-info__top">
						<Link to={`/transactions/${hash}`} className="transactions-info__wallet">
							{hash}
						</Link>
						{method_selector && <div className="info-status">{capitalize(method_selector)}</div>}
					</div>
					<div className="transactions-info__center">
						<div className="transactions-info__transfer">
							<p className="transactions-info__transfer-name">Sender</p>
							<Link to={`/address/${from_address_hash}`} className="transactions-info__wallet">
								{from_address_hash}
							</Link>
						</div>
						<div className="transactions-info__arrow">
							<ArrowRight />
						</div>
						<div className="transactions-info__transfer">
							<p className="transactions-info__transfer-name">Receiver</p>
							<Link to={`/address/${to_address_hash}`} className="transactions-info__wallet">
								{to_address_hash}
							</Link>
						</div>
					</div>
					<div className="transactions-info__bottom">
						<p className="transactions-info__text">
							{token_transfer && (
								<span style={{ wordBreak: 'break-all', display: 'block' }}>
									{token_transfer[0]?.amount}{' '}
									{currency &&
										`${capitalize(currency.split(' ')[0])} ${
											currency.split(' ')[1] ? currency.split(' ')[1].toUpperCase() : ''
										}`}
								</span>
							)}
							<span>
								{moneyFormat(fee?.fee, 0, 8)} {fee.asset} Fee
							</span>
						</p>
						{token_transfer &&
							!!token_transfer.length &&
							token_transfer.map((el) => (
								<div key={el.id} className="transactions-swap">
									<div className="transactions-swap__wallets">
										<p className="transactions-swap__wallet">
											{shortNotation(el?.from_address_hash, 8, 6)}
										</p>
										<div className="transactions-swap__arrow">
											<ArrowRight />
										</div>
										<p className="transactions-swap__wallet">
											{shortNotation(el?.to_address_hash, 8, 6)}
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<div className="block-item__right">
				<div className="block-period">
					<Link to={`/blocks/${block_hash}`} className="block-period__number">
						Block #{block_number}
					</Link>
					<div className="block-period__time">
						{formatDistance(Date.parse(created_at), new Date(), { addSuffix: true })}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransactionRow;
