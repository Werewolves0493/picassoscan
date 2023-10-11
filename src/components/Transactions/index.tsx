import { FC, useEffect, useState } from 'react';
import { useMoneyFormat } from '@/hooks/useMoneyFormat';
// import { useDispatch, useSelector } from 'react-redux';
// import {
// 	getTransactionsCountRequest,
// 	getTransactionsRequest,
// } from 'redux/reducers/blockchain/reducer';
// import { getTransactions, getTransactionsCount } from 'redux/reducers/blockchain/selectors';
// import PaginationTable from 'ui/PaginationTable';
import TransactionsBlock from './TransactionsBlock';

export const Transactions: FC = () => {
	// const dispatch = useDispatch();
	const numFormat = useMoneyFormat();
	// const transactions = useSelector(getTransactions);
	// const transactionsCount = useSelector(getTransactionsCount);

	const [currentPage, setCurrentPage] = useState<number>(1);

	// useEffect(() => {
	// 	dispatch(getTransactionsRequest({ current_page: String(currentPage) }));
	// }, [currentPage, dispatch]);

	// useEffect(() => {
	// 	dispatch(getTransactionsCountRequest());
	// }, [dispatch]);

	return (
		<section className="explore-home-section">
			<div className="container">
				<div className="explore-block">
					<div className="explore-block__top">
						<h4 className="block-title block-title--mr-auto">Transactions</h4>
						{/* {transactions && ( */}
							{/* <PaginationTable
								className="block-pagination--header"
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/> */}
						{/* )} */}
					</div>

					<div className="data-counter">
						<p className="data-counter__text">
							{numFormat(18, 0, 0)} More transactions have come in
						</p>
					</div>
					{/* {transactions && <TransactionsBlock itemsList={transactions.data} />}

					{transactions && (
						<PaginationTable
							className="block-pagination--footer"
							currentPage={currentPage}
							lastPage={transactions?.last_page}
							setCurrentPage={setCurrentPage}
						/>
					)} */}
				</div>
			</div>
		</section>
	);
};
