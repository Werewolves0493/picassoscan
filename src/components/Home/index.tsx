import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import TransactionsBlock from '@/components/Transactions/TransactionsBlock';
// import { useDispatch, useSelector } from 'react-redux';
// import {
// 	getTransactionsCountRequest,
// 	getTransactionsLastRequest,
// } from 'redux/reducers/blockchain/reducer';
// import { getTransactionsCount, getTransactionsLast } from 'redux/reducers/blockchain/selectors';
import { useMoneyFormat } from '@/hooks/useMoneyFormat';
// import SocketConnectWrapper from 'components/SocketConnectWrapper';
// import SocketWithTopicConnectWrapper from 'components/SocketWithTopicConnectWrapper';
// import { TabsButton } from './TabsButton';
import BlocksLast from './BlocksLast';
// import StatisticMain from './StatisticMain';
import {Transactions} from '@/constants/transactionList'

export const Home: FC = () => {
	// const dispatch = useDispatch();
	const numFormat = useMoneyFormat();
	// const transactions = useSelector(getTransactionsLast);
	// const transactionsCount = useSelector(getTransactionsCount);
	const transactionsList = Transactions?.slice(0, 4);
	console.log(transactionsList, `this is constant transactionlist+++++++++`);
	// useEffect(() => {
	// 	dispatch(getTransactionsLastRequest());
	// 	dispatch(getTransactionsCountRequest());
	// }, [dispatch]);
	return (
		// <SocketConnectWrapper>
		// 	<SocketWithTopicConnectWrapper topicName="explorer_data">
		<section className="explore-home-section">
			<div className="container">
				<BlocksLast />
				<div className="explore-block">
					<div className="explore-block__top">
						<h4 className="block-title block-title--mr-auto">Transactions</h4>
						<NavLink to="/transactions" className="block-view block-view--dark">
							View All Transactions
						</NavLink>
					</div>

					<div className="data-counter">
						<p className="data-counter__text">
							{numFormat(18, 0, 0)} More transactions have come in
						</p>
					</div>
					{transactionsList && <TransactionsBlock itemsList={transactionsList} />}
					{/* <TransactionsBlock /> */}
					<div className="view-more-mob">
						<NavLink to="/transactions" className="block-view block-view--dark">
							View All Blocks
						</NavLink>
					</div>
				</div>
			</div>
		</section>
		// 	</SocketWithTopicConnectWrapper>
		// </SocketConnectWrapper>
	);
};