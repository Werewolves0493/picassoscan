import { FC, useEffect, useRef, useState } from 'react';
// import L from 'i18n-react';
import { TMenuOptions } from '@/layouts/MainNav/type';
import { NavLink } from 'react-router-dom';
import { IHeaderDropdown } from './types';

// ==================================:
const HeaderDropdown: FC<IHeaderDropdown> = (props) => {
	const { options, icon, name, currentClass = '' } = props;

	const [open, setOpen] = useState(false);
	const node = useRef<HTMLDivElement | null>(null);

	const handleClick = (event: MouseEvent): boolean | undefined => {
		if (node?.current?.contains(event.target as Node)) {
			setOpen(true);
			return false;
		}

		setOpen(false);
		return true;
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	return (
		<div className={`nav-item ${String(currentClass)} ${open ? 'active' : ''}`} ref={node}>
			<button type="button" className="nav-item__link">
				<span className={`nav-item__link-icon ${currentClass ? 'nav-item__link-icon--dot' : ''}`}>
					{icon}
				</span>
				{name}
				<span className="nav-item__link-arrow">
					<svg
						width="11"
						height="6"
						viewBox="0 0 11 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.45906 1.47461L6.19906 4.73461C5.81406 5.11961 5.18406 5.11961 4.79906 4.73461L1.53906 1.47461"
							stroke="#8192AA"
							strokeWidth="1.2"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			</button>

			<div className="dropdown dropdown--nav">
				<ul className="dropdown-list">
					{options.map((opt: TMenuOptions) => {
						return (
							<li key={opt?.order}>
								<NavLink to={opt.link}>{opt.name}</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default HeaderDropdown;
