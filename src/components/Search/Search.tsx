import React, { useEffect, useState } from 'react';
// import { getSearchRequest } from 'redux/reducers/search/reducer';
import { useNavigate } from 'react-router-dom';
// import { getSearchData, getSearchLoading } from 'redux/reducers/search/selectors';

const Search = () => {
	const navigate = useNavigate();
	// const data = useSelector(getSearchData);
	// const loading = useSelector(getSearchLoading);

	const [text, setText] = useState('');
	return (
		<>
			<div className="header-search__input">
				<input
					value={text}
					onChange={(e) => setText(e.target.value)}
					type={text}
					onKeyDown={(event) => {
						// if (event.keyCode === 13) {
						// 	dispatch(getSearchRequest({ text, navigate }));
						// }
					}}
					className="input-item input-item--header-search input-item--left-icon"
					placeholder="Search by address, token symbol n..."
				/>
				<span
					style={{ cursor: 'pointer' }}
					// onClick={() => {
					// 	dispatch(getSearchRequest({ text, navigate }));
					// }}
					className="input-icon"
				>
					<svg
						width="18"
						height="19"
						viewBox="0 0 18 19"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.625 16.25C12.56 16.25 15.75 13.06 15.75 9.125C15.75 5.18997 12.56 2 8.625 2C4.68997 2 1.5 5.18997 1.5 9.125C1.5 13.06 4.68997 16.25 8.625 16.25Z"
							stroke="#8E8EA9"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M16.5 17L15 15.5"
							stroke="#8E8EA9"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			</div>
		</>
	);
};
export default Search;