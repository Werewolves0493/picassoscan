import { TMenuOptions } from '@/layouts/MainNav/type';

// ==================================:
export interface IHeaderDropdown {
	name?: string;
	currentClass?: string;
	value?: string;
	icon?: any;
	onChange?: (selectedValue: TMenuOptions) => void;
	options: Array<TMenuOptions>;
}
