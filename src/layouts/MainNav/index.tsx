import { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderDropdown from '@/ui/HeaderDropdown';
import Search from '@/components/Search/Search';
import { IMainNav } from './type';
import { iconElement, ExplorerList } from './data';
const MainNav: FC<IMainNav> = ({ open }) => {
    useEffect(() => {
        if (open) {
            document.body.classList.add('body-fixed');
        } else {
            document.body.classList.remove('body-fixed');
        }
    }, [open]);

    return (
        <div className={`nav-block ${open ? 'active' : ''}`}>
            <div className="nav-block__inner">
                <nav className="main-nav">
                    <HeaderDropdown name="Explorer" icon={iconElement('Explorer')} options={ExplorerList} />
                    <div className="nav-item nav-item--mob-only">
                        <NavLink to="/referral" className="nav-item__link">
                            <span className="nav-item__link-icon">
                                <svg
                                    width="18"
                                    height="19"
                                    viewBox="0 0 18 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 9.5C11.0711 9.5 12.75 7.82107 12.75 5.75C12.75 3.67893 11.0711 2 9 2C6.92893 2 5.25 3.67893 5.25 5.75C5.25 7.82107 6.92893 9.5 9 9.5Z"
                                        stroke="#8192AA"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.55762 17C2.55762 14.0975 5.44511 11.75 9.00011 11.75C9.72011 11.75 10.4176 11.8475 11.0701 12.0275"
                                        stroke="#8192AA"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M16.5 14C16.5 14.5625 16.3425 15.095 16.065 15.545C15.9075 15.815 15.705 16.055 15.4725 16.25C14.9475 16.7225 14.2575 17 13.5 17C12.405 17 11.4525 16.415 10.935 15.545C10.6575 15.095 10.5 14.5625 10.5 14C10.5 13.055 10.935 12.2075 11.625 11.66C12.1425 11.2475 12.795 11 13.5 11C15.1575 11 16.5 12.3425 16.5 14Z"
                                        stroke="#8192AA"
                                        strokeWidth="1.2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12.3301 13.9996L13.0726 14.7421L14.6701 13.2646"
                                        stroke="#8192AA"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            Refer a Friend
                        </NavLink>
                    </div>
                </nav>
                <div className="header-search">
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default MainNav