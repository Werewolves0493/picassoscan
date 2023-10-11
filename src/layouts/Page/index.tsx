import { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { TPageProps } from './types';

const Page: FC<TPageProps> = ({ children, title, link, text }) => {
    const pageTitle = title ? `| ${title}` : '';
    const pageText = text || '';
    const pageLink = link || '';
    return (
        <>
            <div className={`wrapper`}>
                <Header />
                <main className="main">{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default Page