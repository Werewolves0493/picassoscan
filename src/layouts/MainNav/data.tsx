export const iconElement = (name: string): any => {
    switch (name) {
        case 'Explorer':
            return (
                <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.61328 4.95996L8.49995 8.36663L14.3466 4.97996"
                        stroke="#8192AA"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.5 14.407V8.36035"
                        stroke="#8192AA"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.12042 1.65287L3.56042 3.6262C2.75375 4.07287 2.09375 5.19287 2.09375 6.11287V9.87954C2.09375 10.7995 2.75375 11.9195 3.56042 12.3662L7.12042 14.3462C7.88042 14.7662 9.12708 14.7662 9.88708 14.3462L13.4471 12.3662C14.2538 11.9195 14.9138 10.7995 14.9138 9.87954V6.11287C14.9138 5.19287 14.2538 4.07287 13.4471 3.6262L9.88708 1.6462C9.12042 1.2262 7.88042 1.2262 7.12042 1.65287Z"
                        stroke="#8192AA"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case 'Wallets':
            return (
                <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.16797 6H5.16797"
                        stroke="#8192AA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M15.1655 7.31376V8.68713C15.1655 9.0538 14.8722 9.35377 14.4988 9.36711H13.1922C12.4722 9.36711 11.8122 8.84044 11.7522 8.12044C11.7122 7.70044 11.8722 7.30711 12.1522 7.03377C12.3988 6.78044 12.7388 6.63379 13.1122 6.63379H14.4988C14.8722 6.64712 15.1655 6.94709 15.1655 7.31376Z"
                        stroke="#8192AA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.152 7.033C11.872 7.30633 11.712 7.69967 11.752 8.11967C11.812 8.83967 12.472 9.36633 13.192 9.36633H14.4987V10.333C14.4987 12.333 13.1654 13.6663 11.1654 13.6663H5.16536C3.16536 13.6663 1.83203 12.333 1.83203 10.333V5.66634C1.83203 3.85301 2.92537 2.58634 4.62537 2.37301C4.7987 2.34634 4.9787 2.33301 5.16536 2.33301H11.1654C11.3387 2.33301 11.5054 2.33967 11.6654 2.36633C13.3854 2.56633 14.4987 3.83967 14.4987 5.66634V6.63302H13.112C12.7387 6.63302 12.3987 6.77967 12.152 7.033Z"
                        stroke="#8192AA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        default:
            return '';
    }
};

export const ExplorerList = [
	{
		order: 1,
		name: `Blocks`,
		link: '/blocks',
	},
	{
		order: 2,
		name: `Extrinsics`,
		link: '/extrinsics',
	},
	{
		order: 3,
		name: `Tokens`,
		link: '/tokens/?page=1&search=',
	},
];
