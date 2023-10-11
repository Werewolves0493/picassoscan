import { ReactNode } from 'react';

// ==========================================:
export type TPageProps = {
	title?: string;
	children?: ReactNode;
	text?: string | undefined;
	link?: string | undefined;
};
