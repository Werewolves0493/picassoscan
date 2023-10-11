import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// import { getBlocksLastRequest } from 'redux/reducers/blockchain/reducer';
// import { blocksLoading, getBlocksLast } from 'redux/reducers/blockchain/selectors';
import { shortNotation } from '@/services/utils/textSlice';
import Loader from '@/ui/Loader';

const BlocksLast = () => {
	// const dispatch = useDispatch();
	// const lastBlocks = useSelector(getBlocksLast);
	// const loading = useSelector(blocksLoading);

	// const listBlocks = lastBlocks?.slice(0, 5);

	// useEffect(() => {
	// 	dispatch(getBlocksLastRequest());
	// }, [dispatch]);

	return (
		<div className="explore-block explore-block--statistic">
			<div className="explore-block__top">
				<h4 className="block-title block-title--mr-auto">Blocks</h4>
				<NavLink to="/blocks" className="block-view">
					View All Blocks
				</NavLink>
			</div>
			<div className="block-list table-position">
				{/* {loading && (
					<div className="table-loader-wrapper">
						<Loader />
					</div>
				)} */}
				{/* {listBlocks &&
					listBlocks.map((el) => ( */}
				<div className="block-card">
					<Link to={`/blocks/3396162`} className="block-card__number">
						3396162
					</Link>
					<p className="block-card__sec">14 Transactions in a seconds</p>
					<div className="block-card__wrapper">
						<p className="block-card__valid">Validator</p>
						<span className="block-card__hex">
							<span className="block-card__hex-num">{shortNotation("0x9e05c5b3a6edec491bc502726cc7944cdca3c194280b41127b146f6fd91dbc3c", 12)}</span>
						</span>
					</div>
				</div>
				{/* ))} */}
			</div>
			<div className="view-more-mob">
				<NavLink to="/blocks" className="block-view">
					View All Blocks
				</NavLink>
			</div>
		</div>
	);
};

export default BlocksLast;
