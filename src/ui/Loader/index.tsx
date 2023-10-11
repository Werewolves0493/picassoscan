import { FC } from 'react';
import { ILoader } from './types';

const Loader: FC<ILoader> = (props) => {
	const { small } = props;

	return <div className={`${small ? 'lds-dual-ring-small' : 'lds-dual-ring'}`} />;
};

export default Loader;
