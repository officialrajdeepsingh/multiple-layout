import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: any) {
    return (
        <div className=''>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;