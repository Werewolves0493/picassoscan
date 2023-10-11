import React, { FC } from 'react';
import { ITransaction } from '@/services/api/blockchain/types';
import TransactionRow from './TransactionRow';

interface ITransactionsBlockProps {
	itemsList: ITransaction[];
}

const TransactionsBlock: FC<ITransactionsBlockProps> = ({ itemsList }) => {
	return (
		<div className="explore-blocks">
			{itemsList.map((item) => ( 
				<TransactionRow key={item.block_id} {...item} /> 
			))}
		</div>
	);
};

export default TransactionsBlock;
