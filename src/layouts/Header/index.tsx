import { FC, useState } from 'react';
import MainNav from '@/layouts/MainNav';
/* eslint-disable no-debugger */

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  return (
    <header className="header">
      <div className="header__container  ">
        <div className="header-left">
          <button type="button" onClick={handleMenu} className="nav-btn">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18.5H21"
                stroke="#8192AA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12.5H21"
                stroke="#8192AA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6.5H21"
                stroke="#8192AA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <MainNav open={open} />
      </div>
    </header>
  );
};

export default Header;
